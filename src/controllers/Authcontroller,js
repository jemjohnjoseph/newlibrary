const User =require('../model/user.js');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=(req,res,next)=>{
    bcrypt.hash(req.body.password,20,function(err,hashedpass){
        if (err){
            res.json({
                error:err
            })
        }
        let user=new User({
            name:req.body.name,
            email:req.body.email,
            password:hashedpass
        })
        user.save()
        .then(user=>{
            res.json(
                {
                    message:'User added successfully'
                }
            )
        })
        .catch(error=>{
            res.json({
                message:"An error occured"
            })
        })
    })

   
    module.exports=register
}