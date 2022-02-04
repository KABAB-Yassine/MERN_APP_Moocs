let express=require('express');
var app=express();
var bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

let User_route=require('./Routes/User.route');
let Cours_route=require('./Routes/Cours.route');
app.use('/',User_route);
app.use('/getCours',Cours_route);
app.listen(5000,()=>console.log("serveur => 5000"));