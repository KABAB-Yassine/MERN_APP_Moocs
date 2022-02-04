let DB=require('../DB.js');
const axios = require("axios");


let Cours_model=require('../Modules/Cours.model');

module.exports={
    getCours:async function(req,res,next){
        let Cours=await Cours_model.getCours();
        console.log(Cours)
        res.json(Cours);
    },
    getChapiters:async function(req,res,next){
        let Chapitres=await Cours_model.getChapiters(req.params.cour);
        console.log(Chapitres)
        res.json(Chapitres);
    },
    getVideos:async function(req,res,next){
        console.log(req.params.chapitre)
        let Videos=await Cours_model.getVideos(req.params);
        console.log(Videos)
        res.json(Videos);
    },
    // UpdateUser:async function(req,res,next){
    //     console.log("kabab14")
    //     console.log(req.body)
    //     console.log(req.params.id)
    //     let Users=await User_model.UpdateUser(req.params.id,req.body);
    //     console.log(Users);
    //     res.send("data passed");
    // },
    // InsertUser:async function(req,res,next){
    // console.log(req.body)
    // try{
    // User=await User_model.InsertUser(req.body)
    // res.status(200).send({message:"User Created"})
    // }catch(err){
    //     res.status(200).send({message:"User not Created"})
    // }    
    // },
    // FindUser:async function(req,res,next){
    //     let User=await User_model.FindUser(req.body);
    //     console.log(User)
    //     if(User.length>0)
    //     res.status(200).send({message:"existe"});
    //     else res.status(404).send({message:"not existe"});
    // },

}