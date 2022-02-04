const loadDB = require('../DB');
var ObjectId = require('mongodb').ObjectId; 
const fs = require("fs").promises;
var Url = require('url-parse');
var path = require('path');

module.exports={
     getCours :async()=>{
        try{
        const cours= await fs.readdir("./my-app/src/cours"); 
        const db = await loadDB();
        const DB= await db.db("Projet_web"); 
        //let user = { name: "reda",email:"yassine.kabab123@gmail.com", password: "1234",Score:"0" }
        //await DB.collection("UserList").insertOne(user);
        let result=await DB.collection("Cours").find().toArray();
        cours.forEach(cour=>{result.forEach((e)=>{if(e.title==cour)e.cour=cour})})
        db.close();
        return result;
        }catch(err){
          console.log(err);
        }
    },
    getChapiters:async(cour)=>{
        try{
        const Chapitres=(await fs.readdir("./my-app/src/cours/"+cour,{ withFileTypes: true })).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
        return Chapitres;
        }catch(err){
          console.log(err);
        }
    },
    getVideos:async(data)=>{
        console.log(data)
        try{
        const Videos=(await fs.readdir("./my-app/src/cours/"+data.cour+"/"+data.chapitre,{ withFileTypes: true })).filter(function(e){return path.extname(e.name).toLowerCase() === '.mp4'})
        return Videos;
        }catch(err){
          console.log(err);
        }
    },
    // UpdateUser :async(id,data)=>{
    //     try{
    //     console.log(data);
    //     const db = await loadDB();
    //     const DB= await db.db("UserList"); 
    //     //let user = { name: "reda",email:"yassine.kabab123@gmail.com", password: "1234",Score:"0" }
    //     //await DB.collection("UserList").insertOne(user);
    //     let result=await DB.collection("UserList").updateOne({"_id":ObjectId(data.id)},{$set:{Score:data.Score}})
    //     db.close();
    //     console.log(result);
    //     }catch(err){
    //       console.log(err);
    //     }
    // },
    // InsertUser:async(User)=>{
    //   try{
    //   console.log("kabab");
    //   console.log(User);
    //   const db = await loadDB();
    //   const DB= await db.db("Projet_web"); 
    //   //let user = { name: "reda",email:"yassine.kabab123@gmail.com", password: "1234",Score:"0" }
    //   //await DB.collection("UserList").insertOne(user);
    //   await DB.collection("Users").insertOne(User);
    //   console.log(User)
    //   db.close();
    //   }catch(err){
    //     console.log(err);
    //   }
    // },
    // FindUser:async(User)=>{
    //   try{
    //   const db = await loadDB();
    //   const DB= await db.db("Projet_web"); 
    //   let query={$and:[{mail:User.mail},{password:User.password}]};
    //   let result=await DB.collection("Users").find(query).toArray();
    //   db.close();
    //   return result;
    //   }catch(err){
    //     console.log(err);
    //   }

}