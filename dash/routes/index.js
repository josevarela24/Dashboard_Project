var express = require('express');
var router = express.Router();
var userLogin = require('../models/userLogin');
var mid = require('../Logout/Logout');
var email = require('../models/email');
//var MongoClient = require('mongodb').MongoClient
//var url = "mongodb://localhost:27017/UserLogin";

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

router.get('/login', function(req, res, next){
  return res.render('login', {title: 'Log In'});
});

router.post('/login', function(req, res, next){
  // create object with form input
  var userData = {
    email: req.body.email,
    password: req.body.password,
    confirm: false
  };

 /* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb"); // what is db name?
    dbo.collection("UserLogin").findOne({}, function(err, result) {
      if (err) throw err;
     confirm = result.confirm;
      db.close();
    })
  });*/

   if(req.body.email && req.body.password /*&&*confirm*/){
    userLogin.authenticate(req.body.email, req.body.password, function(error,user){
      if (error || !user){
       var err = new Error('Wrong email or password,');
       err.status = 401;
       return next (err);
      } else {
        req.session = {}; //dangerous??
        req.session.userid = user._id;
        res.redirect('/admin');
      }
    });
   
  } else {
      if(req.body.email && req.body.password){
        var err =  new Error('Email and password are required.');
       err.status = 401;
       return next(err);
      }if(!confirm){
        var err =  new Error('Registration not confirmed contact admin.');
        return next(err);
       }
    }
});

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
                  user: 'naomihbeltrand@gmail.com', // generated ethereal user
                  pass: '3583nhbJA' // generated ethereal password
              }
          });
      
          // setup email data with unicode symbols
          let mailOptions = {
              from: '"Alliance Data Dashboard" <naomihbeltrand@gmail.com>', // sender address
              to: 'naomihbeltrand@gmail.com', // list of receivers
              subject: 'Confirm Registration of ' + req.body.email, // Subject line              html: '<form> http://localhost:3000/login" </form>' 
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
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

router.post('/registrationComplete', function(req, res, next) {
   
    req.session = {}; //is this dangerous?
    req.session.userId = user._id;
   // user.email = req.session.confirmEmail
   
    app.put('../models/userLogin', function(req, res) {
      var user = {
        email: req.body.confirmEmail,
        password: 'password',
        confrim: true
      }
      userLogin.update({_id: req.params.id}, user, function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.send(raw);
      });
    });
    /* 
    MongoClient.connect('mongodb://127.0.0.1:27017/Userlogin', function(err, db) {
    if(err) throw err;

  db.collection('Userlogin').findAndModify(
    {email: confirmEmail}, // query
 //    [['_id','asc']],  // sort order
      {$set: {confirm: true}}, // replacement, replaces only the field "hi"
     //   {}, // options
      function(err, object) {
         if (err){
          console.warn(err.message);  // returns error if no matching object found
        }else{
          console.dir(object);
        }
      });
    });
 // userLogin.update({userId}, {confirm:true});*/
});

router.get('/registrationComplete', function(req, res, next){
  return res.render('registrationComplete', {title: 'registrationComplete'});
 });
 
 router.get('/deny', function(req, res, next){
  return res.render('deny', {title: 'deny'});
 });

// router.get('/admin', function(req, res, next){
//  return res.render('admin', {title: 'admin'});
// });

router.get('/admin', 
    function(req, res, next){
        res.locals.admin=true
        next()
    } ,
    uploadController.get_detail
);

router.post('/admin', uploadController.post_detail);

router.get('/success', function(req, res, next){
  return res.render('success', {title: 'success'});
 });

 router.get('/confirm', function(req, res, next){
  return res.render('confirm', {title: 'confirm'});
 });
module.exports = router;
