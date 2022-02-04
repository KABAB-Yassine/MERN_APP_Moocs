let express=require('express');
let Router=express.Router();
let User_Controller=require('../Controllers/User_Controller')


Router.get('/',User_Controller.getUsers);
Router.put('/:id',User_Controller.UpdateUser);
Router.post('/Register',User_Controller.InsertUser);
Router.post('/login',User_Controller.FindUser);




module.exports=Router;