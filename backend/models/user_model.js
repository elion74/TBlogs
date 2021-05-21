const mongoose =  require('mongoose');


const userschema = mongoose.Schema({
    email:String, 
    username:String,
    password:String, 
    age:Number,
    image: {
        data: Buffer,
        contentType: String
    } 
});


const User = mongoose.model('user', userschema);

module.exports = User;