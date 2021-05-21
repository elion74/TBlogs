const router = require('express').Router();
const articlecontroller = require('../controllers/article_controller.js'); 

router.get('/', articlecontroller.showarticle);

router.get('/myarticles', articlecontroller.getmyarticles);

router.get('/getmostliked', articlecontroller.getmostliked);


module.exports = router;