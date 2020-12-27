const express = require("express");
const LoginRouter = express.Router();
const Userdata = require("../model/Userdata");

// const bodyParser = require("body-parser");
// const { check, validationResult } = require("express-validator");

// const urlencodedParser = bodyParser.urlencoded({extended:false});

const signup=[
    {
        link:"/Signup",name:"Signup"
    }
];

function router(nav){
   
    LoginRouter.get("/",function(req,res){
        res.render("userlogin",{
            nav,
            title:'Library',
            signup,
        });
    });
    
  
    LoginRouter.post("/add",function(req,res){
        var username = req.body.username;
        var password = req.body.password;
console.log("us:"+username);
console.log("us:"+password);

// console.log("us:"+warning+"sds");

        Userdata.findOne({email:username,pwd:password},function(err,user){
           if(user.user_email === username && user.user_password === password){
            {
                res.redirect("/signup");
            }
            // console.log("checking id and password")
        }
            else {
                
                // console.log("not registerd")

                // console.log("us:"+warning+"sds");
                res.redirect("/userbooks");
            }
            
          
        })
    })
    

    return LoginRouter;
}

module.exports = router;
