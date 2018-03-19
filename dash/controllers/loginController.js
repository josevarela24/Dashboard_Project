var mongoose = require('mongoose');
var Login = require('../models/login');

exports.get = function(req, res) {
    res.render('login', { title: 'Test'});
}