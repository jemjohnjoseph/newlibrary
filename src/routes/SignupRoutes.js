const express = require("express");
const SignupRouter = express.Router();
const Userdata = require("../model/Userdata");

let mssg = "";
function router(nav) {

    SignupRouter.get("/", function (req, res) {
        res.render("Signup", {
            nav,
            title: 'Library'
        });
    });

   

    SignupRouter.post("/add", function (req, res) {
        var email = req.body.email;
       
        Userdata.findOne({ email: email }, function (err, user) {
            if (err) {
                // console.log("here");
                console.log(err);
            }
            else if (!user) {

                // console.log("not registerd")
                // console.log("us:"+warning+"sds");
                var item = {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    pwd: req.body.pwd,
                    Repassword: req.body.Repassword
                }
                var users = Userdata(item);
                users.save();
                alert=(" Please continue");
                res.redirect("/userlogin");
            }
            else {
                // console.log("success");
              
               alert=("User alreasy exists. Please login to continue");
                res.redirect("/userlogin");
            }
        })
    });

    SignupRouter.get("/signupmsg", function (req, res) {
        res.render("signupmsg", {
            nav,
            title: 'Library',
            mssg
        });
    });

    return SignupRouter;
}

module.exports = router;