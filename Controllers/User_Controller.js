let DB=require('../DB.js');
const axios = require("axios");

let User_model=require('../Modules/User.model');

module.exports={
    getUsers:async function(req,res,next){
        let Users=await User_model.getUsers();
        res.json(Users);
    },
    UpdateUser:async function(req,res,next){
        console.log("kabab14")
        console.log(req.body)
        console.log(req.params.id)
        let Users=await User_model.UpdateUser(req.params.id,req.body);
        console.log(Users);
        res.send("data passed");
    },
    InsertUser:async function(req,res,next){
    console.log(req.body)
    try{
    User=await User_model.InsertUser(req.body)
    res.status(200).send({message:"User Created"})
    }catch(err){
        res.status(200).send({message:"User not Created"})
    }    
    },
    FindUser:async function(req,res,next){
        let User=await User_model.FindUser(req.body);
        console.log(User)
        if(User.length>0)
        res.status(200).send({message:"existe",User});
        else res.status(200).send({message:"not existe"});
    },

}