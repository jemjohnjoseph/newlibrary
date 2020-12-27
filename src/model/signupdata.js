
const mongoose =require('mongoose') 
mongoose.connect('mongodb+srv://userone:userone@ictaksfile.tuone.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    
    email: String,
    phno: String,
    password: String,
    // image: String
});
var userdata = mongoose.model('userdata',UserSchema);
module.exports = userdata;
