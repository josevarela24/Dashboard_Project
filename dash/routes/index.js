var express = require('express');
var router = express.Router();
var userLogin = require('../models/userLogin');
var mid = require('../Logout/Logout');
var email = require('../models/email');
var loggedIn = 0;

var User = require('../models/userLogin');

const mailer = require('pug-mailer')

var uploadController = require('../controllers/uploadController');

/* GET home page. */
router.get('/', 
    function(req, res, next){
        res.locals.admin=false
        next()
    } ,
    uploadController.get_detail
);

router.post('/sss', function(req, res, next){
  var yr = req.body.val;
  var fid = req.body.id;

  switch(fid){
    case "one":  
        var funnn = function(year, callback){
        uploadController.getGDPfunc(year, callback);
      }
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 1");
        }
      });
      break;
    case "two":
        var funnn = function(year, callback){
        uploadController.getPPPfunc(year, callback);
      }  
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 2");
        }
      });
      break;
    case "three":  
        var funnn = function(year, callback){
        uploadController.getPopfunc(year, callback);
      }
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 3");
        }
      });
      break;
    case "four":  
        var funnn = function(year, callback){
        uploadController.getNGDPfunc(year, callback);
      }
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 4");
        }
      });
      break;
    case "five":
      var funnn = function(year, callback){
        uploadController.getNFGDPfunc(year, callback);
      }  
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 5");
        }
      });
      break;
    case "six":  
      var funnn = function(year, callback){
        uploadController.getEasefunc(year, callback);
      }
      funnn(Number(yr), function(err,results){
        if(err) console.log("err");
        else{
          res.send(results);
          console.log("inside case 6");
        }
      });
      break;

    default: console.log("didn't work");
      break;
  }

});

router.get('/login', function(req, res, next){
  return res.render('login', {title: 'Log In'});
});

router.post('/login', function(req, res, next){
  // create object with form input
  var userData = {
    email: req.body.email,
    password: req.body.password,
    confirm: userLogin.find({}, {email: req.body.email, confirm: 1}, function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  };
   if(req.body.email && req.body.password && userData.confirm){
    userLogin.authenticate(req.body.email, req.body.password, function(error,user){
    
      if (error || !user){
       var err = new Error('Wrong email or password,');
       err.status = 401;
       return next (err);
      } if(!userData.confirm){
        var err =  new Error('Registration not confirmed contact admin.');
        return next(err);
       } else {
        if(user.confirm){
          req.session = {}; //dangerous??
          req.session.userid = user._id;
          loggedIn = 1;
          res.redirect('/admin');
        }else{
          res.redirect('/deny');
        } 
      }
      
    });
   
  } else {
        var err =  new Error('Email and password are required.');
       err.status = 401;
       return next(err);
    }
});

router.get('/confirm', function(req, res, next){
  if ( loggedIn) {
    return res.render('confirm', {title: 'confirm'});
    
  }else {
    return res.redirect('/deny');
  }
 });

 router.get('/admin', 
 function(req, res, next){
    if(loggedIn){ 
    res.locals.admin=true
     next()
    } else {
      res.redirect('/deny');
    }
 } ,
 uploadController.get_detail
);
// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
 return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', function(req, res, next) {
  if (req.body.email &&
    req.body.password &&
    req.body.confirmPassword) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      var userData = {
        email: req.body.email,
        password: req.body.password,
        confirm: false
      };

      'use strict';

      const nodemailer = require('nodemailer');
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      nodemailer.createTestAccount((err, account) => {
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
              service: 'Gmail',
                 auth: {
                  user: 'alliancedashboard@gmail.com', // generated ethereal user
                  pass: 'Spring2018!' // generated ethereal password
              }
          });
      
          // setup email data with unicode symbols
          let mailOptions = {
              from: '"Alliance Data Dashboard" <alliancedashboard@gmail.com>', // sender address
              to: 'alliancedashboard@gmail.com', // list of receivers
              subject: 'Confirm Registration of ' + req.body.email, // Subject line        
              html: '<form> http://localhost:4485/login" </form>' 
          };
      
          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message sent: %s', info.messageId);
              // Preview only available when sending through an Ethereal account
              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          });
      });

      // use schema's `create` method to insert document into Mongo
      userLogin.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session = {}; //is this dangerous?
          req.session.userId = user._id;
          var err = new Error('All fields required.');
          err.status = 400;
        }
      });
   
      return res.redirect('/success');

    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
});

// GET /logout
router.get('/logout', function(req, res, next) {
    loggedIn = 0;
    return res.redirect('/');
});

router.post('/registrationComplete', function(req, res, next) {
   console.log("okay");

  if(req.body.type == 'c'){
    User.update({email: req.body.confirmEmail}, {$set: {confirm: true}}, function(err, user){
      console.log(user);
      const nodemailer = require('nodemailer');
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      nodemailer.createTestAccount((err, account) => {
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
              service: 'Gmail',
                 auth: {
                  user: 'alliancedashboard@gmail.com', // generated ethereal user
                  pass: 'Spring2018!' // generated ethereal password
              }
          });
      
          // setup email data with unicode symbols
          let mailOptions = {
              from: '"Alliance Data Dashboard" <alliancedashboard@gmail.com>', // sender address
              to: req.body.confirmEmail, // list of receivers
              subject: 'Registration Complete', // Subject line        
              html: '<form> "Registration complete you may now log in to alliance-board.com" </form>' 
          };
      
          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message sent: %s', info.messageId);
              // Preview only available when sending through an Ethereal account
              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          });
      });
      res.redirect('/registrationComplete');
    });
  } else if(req.body.type == 'd'){
    User.update({email: req.body.confirmEmail}, {$set: {confirm: false}}, function(err, user){
      console.log(user);
      res.redirect('/deny');
    });
  }
});

router.get('/registrationComplete', function(req, res, next){
  return res.render('registrationComplete', {title: 'registrationComplete'});
 });
 
 router.get('/deny', function(req, res, next){
  return res.render('deny', {title: 'deny'});
 });



router.post('/admin', uploadController.post_detail);

router.get('/success', function(req, res, next){
  return res.render('success', {title: 'success'});
 });

 

module.exports = router;
