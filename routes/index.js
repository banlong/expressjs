var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Set cookie before send response
  //res.cookie('monster', 'nom nom');
  //res.cookie('signed_monster', 'nom nom', { signed: true });

  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/cookies', function(req, res) {
  //Retrieve cookies
  var monster = req.cookies.monster;
  var signedMonster = req.signedCookies.signed_monster;

  var cookies = {
    monster: monster,
    signMonster: signedMonster
  };
  res.json(cookies);
});

/* Delete cookie. */
router.delete('/cookies', function(req, res) {
  //Delete cookies, next request will have no cookies
  res.clearCookie('monster');
  res.clearCookie('signed_monster');

  res.send("Cookies deleted");
});

module.exports = router;
