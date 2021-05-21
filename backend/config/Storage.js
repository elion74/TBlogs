const multer = require('multer');

// set storage on disk(festplatte)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
        cb(null, 'imguploads')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname  + '-' + Date.now());
    }
})
const upload = multer( {  storage:storage });


module.exports = upload;