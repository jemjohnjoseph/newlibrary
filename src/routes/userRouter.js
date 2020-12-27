const express= require('express');

const signinRouter=express.Router();

 const User=require('../model/user');
 const session = require('express-session');
 var flash = require('express-flash');


function router_signin(nav){

signinRouter.get("/" , function(req,res){
           res.render("userlogin",{

               nav,
               title:'Library'

           });
       })

       
signinRouter.post("/" , function(req,res,next){
 
    var email =req.body.email; 
    var pass = req.body.passwordsignin; 
   
  
    var data = { 
        "email":email, 
        "password":pass, 
        
    } 
    var data=User(data);
    console.log(data);
     
   
    User.findOne({email: email,password:pass})
        .then(user => {
        if (!user) {
            console.log('That email is not registered' );
            res.redirect("/signin")
            
       
        }
        else{
            
            res.redirect('/')
            
            
        }
    });
       

    
})



return signinRouter

    }

//exporting

module.exports=router_signin;