const express = require('express');
const updateAuthorRouter = express.Router();
const Authordata = require("../model/Authordata");
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


    updateAuthorRouter.get('/', function (req, res) {
        const id = req.params.id;

        res.render('updateAuthor',
            {
                nav,
                title: 'Library',
                
            });
        
    });
    updateAuthorRouter.post('/updateAuthor/:id', function (req, res) {
        const id = req.params.id;

        var item = {
            title: String,
            book: String,
            genre: String,
            image: String
        };
        console.log(id);


        Authordata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
            if(!err){
                console.log(doc);
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        })
            
    });


    return updateAuthorRouter;
}
module.exports = router;