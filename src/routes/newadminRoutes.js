
const express= require('express');
// console.log("new admin router");
const Bookdata=require('../model/Bookdata');
const Authordata=require('../model/Authordata');
const ImageUpload=require('../model/imgupload');
const newadminRouter=express.Router();
const path=require('path');
const multer=require('multer');

// set storage
const storage=multer.diskStorage({
    destination:'./public/images',
    filename:function(req, file,cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

// init multer
const upload=multer({
    storage:storage
});

function routers(nav){


newadminRouter.get("/",function(req,res){
        res.render("newauthor",{
            nav,
            title : "library"
        });
    })
    newadminRouter.post("/addauthor",upload.single('Image'), (req, res, next) => {
        const file=req.file;
        // console.log(file)
        // Bookdata.findById({_id: id})
          var item={
              title:req.body.title,
              book:req.body.book,
              genre:req.body.genre,
      
              image:req.file.filename}
            //   console.log(item)
            
              var author=Authordata(item);
              author.save();
              res.redirect('/authors')
        })  
    return newadminRouter;
}
module.exports = routers;