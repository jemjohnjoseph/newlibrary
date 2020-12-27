const mongoose =require('mongoose') 
mongoose.connect('mongodb+srv://userone:userone@ictaksfile.tuone.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

// mongoose.connect('mongodb+srv://userone:userone@fsdfiles.jxcel.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{useNewUrlParser:true});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email:String,
    phone:Number,
    pwd:String,
    Repassword:String
    
});

var Userdata = mongoose.model("Userdata",UserSchema);

module.exports = Userdata;