const router = require('express').Router();
const authcontroller = require('../controllers/auth_controller.js');



router.post('/signup', authcontroller.signup);

router.post('/login', authcontroller.login);

router.post('/logout', authcontroller.logout);


module.exports = router;