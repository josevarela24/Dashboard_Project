var mongoose = require('mongoose');
var Login = require('../models/login');

module.exports.controller = function(app) {
    app.get('/login', function(req, res) {
        // any logic goes here
        res.render('login', { title: 'Test'});
    });
}