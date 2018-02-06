var express = require('express');
var router = express.Router();

// var data = require('../vd.json')
var uploadController = require('../controllers/uploadController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
  
//   res.render('random', { title: 'Alliance Data', data: data });
// });
router.get('/', uploadController.get_detail);

router.post('/', uploadController.post_detail);

module.exports = router;
