const express = require('express');
const userModel = require('../model/userModel');
const stRouter = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const ver = require('../middleware/ver');

stRouter.get('/',async(req,res)=>{
    const user = await userModel.find();
    return res.json({"msg":"success",user})
 })

 stRouter.post('/',async(req,res)=>{
    const{name,email,password}=req.body
    const hash = await bcrypt.hash(password,10);
    await userModel.create({name,email,password:hash}) 
    return res.json({"msg":"success"})
 })

 stRouter.post('/log',async(req,res)=>{
    const {email,password}=req.body;
    const user = await userModel.findOne({email})
    if(!user){
        return res.json({"msg":"user not found"})
    }
    const isMatch = await  bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({"msg":"password mismatch"})
    }
      const token =jwt.sign({id:user._id},
        process.env.JWTKEY,
        {expiresIn:"1d"}
    )
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        maxAge:24*60*60*1000,
        sameSite:"lax"
    })
    return res.json({"msg":"success","token":token})
 })


 stRouter.get('/val',ver,async(req,res)=>{
    try{
        return res.json({"msg":"success",user:req.user})
    }
    catch(error){
        if(error=="jwt.TokenExpiredError"){

            return res.json({"msg":"Token expired"})
        }
        else{
            return res.json({"msg":"Invalid token"})
        }
    }
 })

 module.exports = stRouter;