const router = require('express').Router();
const postcontroller = require('../controllers/post_controller.js');
const upload  = require('../config/Storage.js');


router.post('/create',  upload.single('postimage'), postcontroller.create);

router.post('/update', postcontroller.update);

router.delete('/delete', postcontroller.remove);

router.post('/addlike', postcontroller.addlike);


module.exports = router;