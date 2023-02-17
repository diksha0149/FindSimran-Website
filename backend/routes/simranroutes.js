const express=require("express");
const router = express.Router();
const Users = require('../models/profile')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const {check, validationResult}=require("express-validator ")

var jwtSecret = "mysecrettoken"
// register api
router.route('/register').post(async(req,res)=>{
    try {
    const {UserName, email, password} = req.body
    let newUserName = UserName.toLowerCase().replace(/ /g,'')
    if(password.length < 8){
        return res.status(400).json({success: false,
            error : "password must be greater than 7 characters"})
    }
    let check_username = await Users.findOne({username : newUserName})
    if(check_username){return res.status(400).json({success: false,
        error : "This username already exists"})
    }
    let check_email = await Users.findOne({email})
    if(check_email){
        return res.status(400).json({msg : "this email already exists."})
    }
    const user = new Users({
        UserName : newUserName,
        email,
        password,
    });
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);
    const doc = await user.save();
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
        const isMatch = await bcrypt.compare(password,Users .password)
        if(!isMatch){
            console.log("password is incorrect.");
            return res.status(400).json({msg: "password is incorrect."})
        }
        res.json({
            msg : 'Login successfully! ',
        })
    } catch (error) {
        
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


module.exports = router;