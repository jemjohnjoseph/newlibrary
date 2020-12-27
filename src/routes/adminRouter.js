
const express= require('express');

const Bookdata=require('../model/Bookdata');
const Authordata=require('../model/Authordata');
const ImageUpload=require('../model/imgupload');
const adminRouter=express.Router();
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

    adminRouter.get("/bookupload" , function(req,res){
        res.render("bookUpload",{

            nav,
            title:'Library',
        
        });
    })

    adminRouter.post("/bookupload/add" ,upload.single('Image'), (req, res, next) => {
        // upload(req, res, function (err) {
  
        // const file=req.file;})
        const file=req.file;
        // console.log(file)
          var item={
              title:req.body.title,
              author:req.body.author,
              genre:req.body.genre,
      
              image:req.file.filename}
            //   console.log(item)
            
              var book=Bookdata(item);
              book.save();
              res.redirect('/books')
        })  

//     adminRouter.get("/authorupload" , function(req,res){
//         res.render("newauthor",{

//             nav,
//             title:'Library',
 
//         });
//     })

//     adminRouter.post("/authorupload/add",upload.single('Image'),(req, res, next) => {
//         // upload.single('Image'),   
//         // const file=req.file;
//     // console.log(file)
//         var item={
//         title:req.body.title,
//         book:req.body.book,
//         genre:req.body.genre,

//         image:req.file.filename}
//         // console.log(item);
        
//         var author=Authordata(item);
//         author.save();
//         res.redirect('/authors')
//         })

//   //book update button 
adminRouter.post('/bookupdate/:id',async(req,res)=>{
    // res.send("im here"+req.params.id)
    res.render('bookUpdate' ,{

                        nav,
                        title:'Library',
                        id:req.params.id
                        
                    })

    })

// bookupdate

    adminRouter.put('/bookupdate/:id',upload.single('Image'),async(req,res)=>{
        // upload.single('Image') ,
        index=req.params.id;       
        var newvalues = {
            
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.file.filename

        };
        
        Bookdata.findOneAndUpdate({_id: index},newvalues,{new:true},(err,doc)=>{
            if(err){}
            else{
                res.redirect('/books');
            }
        })
        // console.log(newvalues)
        
        
        })
  

       

        
  //author update button 
adminRouter.post('/authorupdate/:id',async(req,res)=>{
    // res.send("im here"+req.params.id)
    res.render('updateAuthor' ,{

                        nav,
                        title:'Library',
                        id:req.params.id
                        
                    })

    })

// bookupdate

    adminRouter.put('/authorupdate/:id',upload.single('Image'),async(req,res)=>{
        // upload.single('Image') ,
        index=req.params.id;       
        var newvalues = {
            
            title:req.body.title,
            book:req.body.book,
            genre:req.body.genre,
            image:req.file.filename

        };
        
        Authordata.findOneAndUpdate({_id: index},newvalues,{new:true},(err,doc)=>{
            if(err){}
            else{
                res.redirect('/authors');
            }
        })
        // console.log(newvalues)
        
        
        })
  

       


    adminRouter.delete('/bookdel/:id' , async(req,res)=>{
          let book
    try {
        book=await Bookdata.findById(req.params.id)
        
        await book.remove()
        res.redirect('/books')
    } catch  {
        if (book ==null){
            res.redirect('/')
        }
      
        
    }

})


adminRouter.delete('/authordel/:id' , async(req,res)=>{
    let author
try {
  author=await Authordata.findById(req.params.id)
  
  await author.remove()
  res.redirect('/authors')
} catch  {
  if (author ==null){
      res.redirect('/')
  }

  
}

})

    
      

    // adminRouter.get("/book",function(req,res){
    //     res.render("addbook",{
    //         nav,
    //         title : "library"
    //     });
    // })
    // adminRouter.post("/:id",upload.single('Image'), (req, res, next) => {
    //     const file=req.file;
    //     // console.log(file)
    //       var item={
    //           title:req.body.title,
    //           author:req.body.author,
    //           genre:req.body.genre,
      
    //           image:req.file.filename}
    //         //   console.log(item)
            
    //           var book=Bookdata(item);
    //           book.save();
    //           res.redirect('/books')
    //     })  
    // // res.send("Hey i am added");

    // adminRouter.get("/",function(req,res){
    //     res.render("newauthor",{
    //         nav,
    //         title : "library"
    //     });
    // })
    // adminRouter.get("/:id",upload.single('Image'), (req, res, next) => {
    //     const file=req.file;
    //     // console.log(file)
    //     // Bookdata.findById({_id: id})
    //       var item={
    //           title:req.body.title,
    //           author:req.body.author,
    //           genre:req.body.genre,
      
    //           image:req.file.filename}
    //         //   console.log(item)
            
    //           var author=Authordata(item);
    //           author.save();
    //           res.redirect('/author')
    //     })  
    return adminRouter;


}
//exporting

module.exports=router;