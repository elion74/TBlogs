const router = require('express').Router();
const homecontroller = require('../controllers/home_controller.js');


router.get('/', homecontroller.getcontent);

router.get('/users', homecontroller.getcreators);

module.exports = router;