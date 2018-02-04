var express = require('express');
var router = express.Router();
var data = require('../vd.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(data);
  
  res.render('random', { title: 'Alliance Data', data: data });
});

module.exports = router;
