const express = require('express');
const updateBookRouter = express.Router();
const Bookdata = require("../model/Bookdata");
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

function router(nav) {


    updateBookRouter.get('/', function (req, res) {
        const id = req.params.id;

        res.render('updateBooks',
            {
                nav,
                title: 'Library',
                
            });
        
    });
    uupdateBookRouter.post('/updateBook/:id', function (req, res) {
        const id = req.params.id;

        var item = {
            title: String,
            book: String,
            genre: String,
            image: String
        };
        console.log(id);


        Bookdata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
            if(!err){
                console.log(doc);
                res.redirect('/books');
            }
            else{
                console.log(err);
            }
        })
            
    });


    return updateBookRouter;
}
module.exports = router;