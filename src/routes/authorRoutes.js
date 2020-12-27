const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../model/Authordata");
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


function router(nav){
   
  
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    
        })
    })
    
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        Authordata.findOne({_id: id})
    .then(function(author){
        res.render('author',{
            nav,
            title:'Library',
            author
        });
    })
});
authorsRouter.delete('/:id', async(req,res)=>{
    let author
    try {
        author = await Authordata.findById(req.params.id)
        await author.remove()
        res.redirect("/authors")
    } catch {
        if(author == null){
            res.redirect("/")}
        }
       }); 
       authorsRouter.post('/authorupdate/:id',async(req,res)=>{
        // res.send("im here"+req.params.id)
        res.render('authorUpdate' ,{
    
                            nav,
                            title:'Library',
                            id:req.params.id
                            
                        })
    
        })
    
    // bookupdate
    
    authorsRouter.put('/authorupdate/:id',upload.single('Image') ,async(req,res)=>{
     
            index=req.params.id;       
            var newvalues = {
                title: String,
                book: String,
                genre: String,
                image: String
                
                // name:req.body.Book,
                // book:req.body.Author,
                // genre:req.body.Genre,
                // img:req.file.filename
    
            };
            
            Authordata.findOneAndUpdate({_id: index},newvalues,{new:true},(err,doc)=>{
                if(err){}
                else{
                    res.redirect('/authors');
                }
            })
            // console.log(newvalues)
            
            
            })
      
    // authorsRouter.post('/:id', function (req, res) {
    //     const id = req.params.id;

    //     var item = {
    //         title: String,
    //         book: String,
    //         genre: String,
    //         image: String
    //     };
    //     console.log(id);


    //     Authordata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
    //         if(!err){
    //             console.log(doc);
    //             res.redirect('/authors');
    //         }
    //         else{
    //             console.log(err);
    //         }
    //     })
            
    // });


    return authorsRouter;
}
module.exports = router;

