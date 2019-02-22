var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/lesson4');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require("express-session");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('./models/User');
var UserController = require('./controllers/UserController');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Passport Setup
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("Trying to authenticate " + username + " identified by " + password);
    
    //done(null, false, {message : "Vous etes pas prêt"});
    User.findOne({ username: username }, function (err, user) {
      if (err) { 
        return done(err); 
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      UserController.verify(user, password, done);
    });
  }
));

passport.serializeUser(function(user, done) {
  // Store the plain user in session.
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // Returns the user as-is from the session
  done(null, user);
});

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret : "faitpaschier",
  resave : false,
  saveUninitialized : false
}));
app.use(express.static(path.join(__dirname, 'public')));

// Passport middlewares setup.
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
