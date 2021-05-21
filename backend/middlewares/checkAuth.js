const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

    if(!req.cookies.access_token){
        res.send({
            message:'you do not have a token cookie', 
            status:401
        });
    
    }else {
                // do cookie exists stuff
                const token = req.cookies.access_token;
    
                jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
                
                        if(err) return res.status(403).send('Invalid Token'); 
            
                        console.log('successfully maintain auth');
                    
                        req.user = user; //so that backend knows which user ist logged in!             
                    });

            next();
    }

}