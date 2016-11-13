var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Include routers
var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var signup = require('./routes/signup');
var profilesignup = require('./routes/profilesignup');
var upload = require('./routes/upload');
var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

// Middleware setup
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register routers
app.use('/', index);
app.use('/users', users);
app.use('/search', search);
app.use('/signup', signup);
app.use('/profilesignup', profilesignup);
app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000);
console.log("Web server 2 started on port 3000");
module.exports = app;
