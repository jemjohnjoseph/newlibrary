const express = require("express");
const signRouter = express.Router();

signRouter.get("/",function(req,res){
    res.render("signin",{
        // nav:[{link:"/books",name:"Books"},{link:"/addauthors",name:"Add Authors"}],
        title:"Library"
    });
});

module.exports=signRouter;