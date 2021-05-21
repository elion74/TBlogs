const Post = require('../models/post_model.js');
const fs = require('fs');


const create = async (req, res) => {
 
    let img = fs.readFileSync(req.file.path);
    console.log(img);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType: req.file.mimetype,
        img: Buffer.from(encode_img, 'base64')
    };

    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        tags: req.body.tag,
        user:req.user.username,
        likes:0,  
        image: final_img
    })

    try {

        await post.save();
        res.status(201).send('post created');
        
    } catch (e) {
        console.log(e);
        res.status(409).send('conflict');
    }
}


const update = async (req, res) => {
    
    try {
        var updatedpost = await Post.updateOne({ _id: req.body.id }, {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        });
        console.log('update post successful');

        res.status(200).send('post updated');

    } catch (e) {
        console.log(e);
        res.status(409).send('conflict');
    }
}


const remove = async (req, res) => {


    try {
        await Post.deleteOne({ _id: req.body.id });
        res.status(200).send('post deleted');

    } catch (e) {
        console.log(e);
        res.status(409).send('conflict');
    }
    
}


const addlike = async (req, res) => {

    try{
        await Post.findOneAndUpdate( {_id:req.body.id}, {$inc:{'likes':1}});

        res.status(200).send('like added');

    }catch(e){
        res.status(409).send('something went wrong');
    }
}

module.exports = {create, update, remove, addlike}