const express = require("express");
const signupadminRouter = express.Router();
// const adminRouters = express.Router();
const signupdata = require("../model/signupdata")
function router(nav){
    signupadminRouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title : "library"
        });
    })
signupadminRouter.post("/add",function(req,res){
    var book = signupdata(item);
    book.save();//save to database
    // res.redirect("/books");
    var item = {
        fullname: req.body.fullname,
        email: req.body.email,
        phno: req.body.phno,
        password: req.body.password
}

var book = signupdata(item);
signup.save();//save to database

// res.redirect("/books");
// res.send("Hey i am added");
});
module.exports = router;
}