var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('search', { title: 'Search' });
});

//Handle GET Form Data
router.get('/result', function(req, res) {
    var name = req.query.name;
    var source = req.query.source;
    console.log('Searching for: ' + name);
    console.log('From: ' + source);
    res.send(name + ' : ' + source);
});

module.exports = router;