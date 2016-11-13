var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('upload', { title: 'File Uploading' });
});

//Handle POST Form File data with FORMIDABLE
router.post('/', function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";       //upload file destination
    form.keepExtensions = true;         //keep the ext as same as the local file
    form.multiples = false;             //upload one file


     //Parses an incoming node.js request containing form data.
     //If cb is provided, all fields and files are collected and passed to the callback:
    form.parse(req, function(err, fields, files){
        if(err){
            return res.redirect(303, '/error');
        }
        console.log('received fields:');
        console.log(fields);
        console.log('received files:');
        console.log(files);
        res.send(files);
    });

    //Emit when received a file
    form.on('file', function(name, file) {
        //Rename file
        var currentFileName =  file.path;
        var newFileName = form.uploadDir + "/" + file.name;
        fs.rename(currentFileName, newFileName);
        //console.log(name);          //field name: upload_file
        //console.log(file.name);     //name of file in the user computer
    });

});

module.exports = router;















