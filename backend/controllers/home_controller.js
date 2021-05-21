const Post = require('../models/post_model.js');
const User = require('../models/user_model.js');

const getcontent = async (req, res) => {
    
    try {
        const posts = await Post.find({},(err, result) => {

            res.status(200).send(result);
        });

    } catch(e){
        res.status(403).send('Forbidden');
    }   
}   


const getcreators = async (req, res) => {
               
    try{
        const creators = await User.find({}).limit(6);
        
        res.status(200).send(creators);

    } catch(e) {
        res.status(403).send('Forbidden');
    }

}    


module.exports = {getcontent, getcreators}