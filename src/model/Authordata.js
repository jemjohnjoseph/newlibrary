const mongoose =require('mongoose') 
mongoose.connect('mongodb+srv://userone:userone@ictaksfile.tuone.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    book: String,
    genre: String,
    image: String
});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;
