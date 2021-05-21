const Post = require('../models/post_model.js');

const showarticle = async (req, res) => {
    
    try{                                    
        const content_post = await Post.findById(req.headers.id, (err, content) => {
            if(err) res.send('somehting went wrong');    
            
            res.json({
                data:content     
            });
        });

    }catch(e){  
        res.send('forbidden' + e);
    }
}    


const getmyarticles = async (req, res) => {

    console.log(req.user.username);
    
    try{
        let user = req.user.username;
        const userarticles = await Post.find({user}, (err, userarticle) => {
           res.status(200).send(userarticle); 
        });

    } catch(e) {
        console.log(e);
    }

}


const getmostliked = async (req, res) => {

    try{

        const mostlikes = await Post.find({}).sort({'likes':-1}).limit(5);

        res.status(200).send(mostlikes);

    } catch(e){
        res.status(409).send(e);
    }

}


module.exports = {showarticle, getmyarticles, getmostliked}