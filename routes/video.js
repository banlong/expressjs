var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
    //Get the template
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<video src="http://localhost:3000/viewvideo/test.mp4" controls autoplay></video>');
});

router.get('/test.mp4', function(req, res, next) {
    //Show video
    var file = "./public/videos/test.mp4";
    var stream = fs.createReadStream(file);
    stream.pipe(res);
});





module.exports = router;
