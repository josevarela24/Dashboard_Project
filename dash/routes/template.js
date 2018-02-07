var express = require('express');
var router = express.Router();

// var data = require('../vd.json')
var templateController = require('../controllers/templateController');

router.get('/', templateController.get);

module.exports = router;
