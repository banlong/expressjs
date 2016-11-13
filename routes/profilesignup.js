var express = require('express');
var router = express.Router();
var multer  = require('multer');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.render('profilesignup', { title: 'Sign Up' });
    res.sendfile('views/uploadform.html');
});


// Using MULTER for a specific router,
// in case you do not want the middleware process the other routes
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage }).single('profile_image');

//Handle POST Form File data
router.post('/', upload, function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var fileName = req.body.profile_image;
    console.log(req.body);
    console.log("Name:  " + name);
    console.log("Email: " + email);
    console.log("File Name: " + fileName);
    console.log("files:"+ req.files);
    console.log("file:"+ req.file);
    if (!req.file) {
        //res.send('No files were uploaded.');
        console.log('No files were uploaded.');
        res.json(req.body);
        return;
    }else{
        res.json(req.file);
    }
});

module.exports = router;