var express = require('express');
var router = express.Router();
var vdd = require('../vd.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(vdd);
  
  res.render('random', { title: 'Random', vdd: vdd });
});

module.exports = router;
