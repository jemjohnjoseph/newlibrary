const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata");
function router(nav){

    booksRouter.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("userbooks",{
           
                nav,
                title:"Library",
                books
            });
        })

        })
       
    booksRouter.get("/:id",function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",{
                nav,
                title:"Library",
                book
            });
        })

        });
        booksRouter.delete('/:id', async(req,res)=>{
            let book
            try {
                book = await Bookdata.findById(req.params.id)
                await book.remove()
                res.redirect("/books")
            } catch {
                if(book == null){
                    res.redirect("/")}
                }
               }); 
       
return booksRouter
}

module.exports = router;