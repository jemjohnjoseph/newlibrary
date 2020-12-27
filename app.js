const express = require("express");
const port = process.env.PORT || 5000;
const methodOverride = require("method-override")
const app = new express();
const    passport = require("passport"); 
const multer = require('multer');
 const   bodyParser = require("body-parser"); 
const    LocalStrategy = require("passport-local"); 

const nav=[
    {
        link:"/userbooks",name:"Books"
    },
    {
        link:"/userauthors",name:"Authors"
        // link:"/addauthors",name:"Add Authors"
    },
    {
        link:"/userlogin",name:"Log-Out"
    },
    
]
const navhome=[
    {
        link:"/signin",name:"Admin-Login"
    },
    {
        link:"/userlogin",name:"Sign-IN"
    },
    {
        link:"/signup",name:"Sign-UP"
    },
    
    
    // {
    //     link:"/signup",name:"Sign-UP"
    // }

]
const navadmin=[
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
        // link:"/addauthors",name:"Add Authors"
    },
    {
        link:"/signin",name:"Log-Out"
    },
    {
        link:"/addbook",name:"Add Book"
    },
    {
        link:"/admina",name:"Add Author"
    }
];
const booksRouter = require("./src/routes/bookRoutes")(navadmin);
const authorsRouter = require("./src/routes/authorRoutes")(navadmin);
const newadminRouter = require("./src/routes/newadminRoutes")(nav,navadmin);
const adminRouter = require("./src/routes/adminRouter")(nav,navadmin);
const userbookRouter = require("./src/routes/userbookRouter")(nav);
const userauthorRouter = require("./src/routes/userauthorRouter")(nav);
const SignupRouter = require("./src/routes/SignupRoutes")(nav)
const LoginRouter = require("./src/routes/LoginRoutes")(nav)
const signRouter = require("./src/routes/signRouter");
const signupRouter = require("./src/routes/SignupRoutes");
const addbookRouters = require("./src/routes/addbookRouters")(nav,navadmin);
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/admin",adminRouter);
app.use("/author",adminRouter);
app.use("/book",adminRouter);
app.use("/admina",newadminRouter);
app.use("/userlogin",LoginRouter);
app.use("/userbooks",userbookRouter);
app.use("/addbook",addbookRouters);
app.use("/signin",signRouter);
app.use("/userauthors",userauthorRouter);
const flash = require('connect-flash');
const session = require('express-session');
app.use("/Signup",SignupRouter);

// Passport Config
require('./src/config/passport')(passport);
// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );


  
app.use(passport.initialize()); 
app.use(passport.session()); 
// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        navhome,
        title:"Digital Library"
});
});



app.listen(port,()=>{console.log("Server Ready at "+ port)}); 
 // "express": "^4.17.1",
    // "express-flash": "0.0.2",
    // "express-session": "^1.17.1",
    // "express-validator": "^6.8.0",
       // "multer": "^1.4.2",
           // "body-parser": "^1.19.0",