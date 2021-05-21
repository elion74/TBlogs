const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config();

const User = require('../models/user_model.js');


const signup =  async (req, res) => {
    console.log(req.body);


    try{
            
        // generate password hash and push user to db
        const salt = await bcrypt.genSalt();
        var hashpassword = await bcrypt.hash(req.body.password, salt);
    
    }   catch(err){
        res.status(409);
    }


    const user = new User({
        email:req.body.email, 
        username:req.body.username, 
        password:hashpassword, 
        age:req.body.age
    });



    try{
        await user.save();

        res.status(201).send('user created');

    } catch(err){
        res.status(409).send('conflict');
    }

}
     

const login = async (req, res) => {


    try{
        // get user with matching email
        var  matchuser = await User.findOne({email:req.body.email});


        /* auth: compare the request password with password in db and 
        if compare == true -->auth successful*/
        const match = await bcrypt.compare(req.body.password, matchuser.password);

        if(match){
            // Jwt Token or session to maintain auth
            console.log('auth success');
            
            const accesstoken = jwt.sign({username:matchuser.username},  process.env.JWT_TOKEN_SECRET,{expiresIn:'1d'});
            console.log(accesstoken);

            // save jwt token in cookie --> so that on every request the auth is maintained
            res.cookie('access_token', accesstoken, {httpOnly:true}).send('cookie with jwt token sent');

        }else{
            console.log('invalid password or email')
            res.status(401).send('Invalid password or email');
        }

    } catch(err){

        res.status(401).send('Your email is incorrect');
    }

} 

const logout = (req, res) => {

    console.log('logged out!')
    res.clearCookie('access_token').status(200).send('you are logged out and cookie is deleted');
}




module.exports = {signup, login, logout};
