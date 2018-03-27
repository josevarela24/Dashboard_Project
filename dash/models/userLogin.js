var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userLoginSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: { 
        type: String, 
        required: true
    },
    confirm: {
        type: Boolean
    }
});

userLoginSchema.statics.authenticate = function(email, password, callback) {
  userLogin.findOne({ email: email })
        .exec(function (error, user) {
          if (error) {
            return callback(error);
          } else if ( !user ) {
            var err = new Error('User not found.');
            err.status = 401;
            return callback(err);
          }
          bcrypt.compare(password, user.password , function(error, result) {
            if (result === true) {
              return callback(null, user);
            } else {
              return callback();
            }
          })
        });
  }
  // hash password before saving to database
  userLoginSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });

var userLogin = mongoose.model('userLogin', userLoginSchema);

module.exports =userLogin;