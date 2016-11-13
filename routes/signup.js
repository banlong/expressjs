var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

//Handle TEXT-ONLY POST Form Data
router.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    res.json(req.body);
});

module.exports = router;