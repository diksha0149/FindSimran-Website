const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../Keys')
const mongoose = require('mongoose')
const Users = require('../models/profile')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    // console.log(authorization);
    if(!authorization){
        return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","");
    // console.log(token);
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"hiiii diksha"});
        }
        const {_id} = payload
        Users.findById(_id).then(userdata=>{
            console.log(userdata);
            req.user = userdata;
            next();
            
        })
       
        // return res.status(200).json({mssg:"logged in successfully"});

    })
}