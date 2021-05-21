const mongoose = require('mongoose');

const postschema = mongoose.Schema({
    title:String, 
    description:String, 
    content:String, 
    tags:[String], 
    user:String,
    likes:Number, 
    image: {
        img: Buffer,
        contentType: String
    }
});

const Post = mongoose.model('post', postschema);

module.exports = Post;