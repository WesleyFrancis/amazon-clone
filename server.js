//------------------MIDDLE-WARE-----------------------------
//express
const express = require("express");
const app = express();
//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");
//bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//dotenv
require('dotenv').config({path:"config/keys.env"});
//static routes
app.use(express.static("public")); 
//mysql2
const db = require("./config/mysqlDAO.js");
//-----------------MIDDLE-WARE-----------------------------

//---------------------MODELS-----------------------------
const user = require("./models/user_modal.js");
//---------------------MODELS-----------------------------

//---------------------ROUTES-------------------------------
app.get("/",(req,res)=>{
    console.log(db.getConnection());
    res.render("index",{
        title:"homepage"
    })
    const userobj={
        firstName:"wesley",
        lastName:"Francis",
        gender:"m",
        email:"blender4343@hotmail.com",
        username:"wesley6216",
        password:"mynewpassword"
    };
    user.createUser(userobj);
});
//---------------------ROUTES-------------------------------

//################--SERVER--###############################
const PORT=3000;
app.listen(PORT,()=>{
    console.log("The server is upp!!!!");
});
//################--SERVER--###############################