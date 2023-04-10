const express=require("express");
const router = express.Router();
const Users = require('../models/profile')
const Scream = require('../models/scream')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var expressValidator = require('express-validator');
 const {JWT_SECRET} = require('../Keys')
 const requireLogin = require('../middleware/requireLogin')
// const {check, validationResult}=require("express-validator ")

var jwtSecret = "mysecrettoken"

router.route('/protected').get(requireLogin,async(req,res)=>{
    return res.send("hello user")
})

// register api
router.route('/register').post(async(req,res)=>{
    try {
    const {UserName, email, password} = req.body
    let newUserName = UserName.toLowerCase().replace(/ /g,'')
    
    let check_username = await Users.findOne({UserName : newUserName})
    if(check_username){
        console.log(check_username)
        return res.status(400).json({
        error : "This username already exists"})
    }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        return res.status(400).json({error : "Enter Correct  Email"})
    }    
    let check_email = await Users.findOne({email})
    if(check_email){
        return res.status(400).json({error : "this email already exists."})
    }
    if(password.length < 8){
        return res.status(400).json({
        error : "password must be greater than 7 characters"})
    }
    const user = new Users({
        UserName : newUserName,
        email,
        password,
    });
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);
    await user.save();
    const payload = {
        user: {
            id: user.id,
        },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        const {_id,UserName,email} = user
        return res.json({ token,user:{_id,UserName,email}});
    });
    } catch (error) {
        console.log(error);
    }
})

// login api
router.route('/login').post(async(req,res)=>{
    try {
        const {email,password} = req.body
        const user_email = await Users.findOne({email})
        if(!user_email){
            console.log(email);
            return res.status(400).json({msg : "This email does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user_email.password)
        if(!isMatch){
            console.log("password is incorrect.");
            return res.status(400).json({msg: "password is incorrect."})
        }
        else{
            const token = jwt.sign({_id:user_email._id},JWT_SECRET)
            const {_id,UserName,email} = user_email
            
            return res.json({token,user_email:{_id,UserName,email}})
        }
        // const payload = {
        //     user: {
        //         id: Users.id,
        //     },
        // };
        // // console.log(user)
        // jwt.sign(payload, jwtSecret, { expiresIn: "5 days" }, (err, token) => {
        //     if (err) throw err;
        //     const profile_name = user_email.UserName;
        //     console.log(token);
        //     return res.json({ token, profile_name});
        // });
    } catch (error) {
        console.error(error.message);
			res.status(500).send("Server error");
    }
})

// get user api
router.route('/allUser').get(async(req,res)=>{
    const docs = await Users.find({});
    res.send(docs);
})

// get user by username
router.route('/user/:UserName').get(async(req,res)=>{
    const find_user = await Users.findOne({UserName:req.params.UserName});
    res.send(find_user);
})

// @route   GET /users/auth
// @desc    Get user by token/ Loading user
// @access  Private
router.route("/auth").get(async (req, res) => {
	try {
		const user = await Users.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// api to post scream details
router.route("/scream").post(require('../models/validator/screamvalidator'),requireLogin,async (req, res) => {
    const {title,link,description,skills} = req.body
    console.log(req.user);
    //condition to check if request body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    return res.status(400).json();
  }
//   return res.status(200).json();
  else{
    req.user.password=undefined;
    const scream_data = new Scream({
        title,
        link,
        description,
        skills,
        postedBy:req.user

    });
    await scream_data
      .save()
      .then((result) => {
        console.log(result);
        return res.status(200).json({
            scream_data:result
        })
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          error: "not possible",
        });
      });
    }

  });


// get all screams
router.route('/allScreams').get(async(req,res)=>{
    // const docs = await Scream.find({});
    // res.send(docs);
    Scream.find()
    .populate("postedBy","_id UserName email avatar phoneNo institutionName")
    .populate("vote.postedBy","_id UserName")
    .sort({
        _id: -1,
      })
    .then(screams=>{
        res.json({screams})
    })
    .catch(err=>{
        console.log(err)
    })
})

// get all screams posted by logged user
router.route('/myScreams').get(requireLogin, async(req,res)=>{
    console.log(req.user);
    // res.json();
    const docs = await Scream.find({postedBy:req.user._id})
    .populate("postedBy","_id UserName")
    .sort({
        _id: -1,
      })
    .then(myscream=>{
        res.json({myscream})
    })
    .catch(err=>{
        console.log(err)
    })
})

// api to vote on scream
router.route('/vote').put(requireLogin,async(req,res)=>{
    // console.log(req);
    const vote = {
        text:req.body.text,
        postedBy:req.user.id
    }
    Scream.findByIdAndUpdate(req.body.postId,{
        $push:{vote}
    },{
        new: true
    }).populate("vote.postedBy","_id UserName")
    .populate("postedBy","_id UserName")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        } else{
            res.json(result);
        }
    })

    
})

// delete scream only by user who posted the scream

router.route('/deletescream/:_id').delete(requireLogin, async(req,res)=>{
    console.log(req.params._id);
    Scream.findOne({_id:req.params._id})
    .populate("postedBy","_id")
    .exec((err,scream)=>{
        if(err || !scream){
            return res.status(422).json({error:err})
        }
        // now we check if scream is present and who is trying to delete the scream
        if(scream.postedBy._id.toString()===req.user._id.toString()){
            scream.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})


module.exports = router;