let express=require('express');
let Router=express.Router();
let Cours_Controller=require('../Controllers/Cours_Controller')


Router.get('/',Cours_Controller.getCours);
Router.get('/getChapitres/:cour',Cours_Controller.getChapiters)
Router.get('/getVideos/:cour/:chapitre',Cours_Controller.getVideos)
//Router.put('/:id',User_Controller.UpdateUser);
//Router.post('/Register',User_Controller.InsertUser);
//Router.post('/login',User_Controller.FindUser);




module.exports=Router;