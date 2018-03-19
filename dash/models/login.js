var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String, 
        required: true
    }
});

var Login = mongoose.model('login', loginSchema);

module.exports = Login;