var express = require('express');
var router = express.Router();
var data = require('../vd.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('random', { title: 'Alliance Data', data: data });
});

module.exports = router;
