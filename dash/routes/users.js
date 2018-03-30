var express = require('express');
var router = express.Router();

// var data = require('../vd.json')
var uploadController = require('../controllers/uploadController');

router.get('/', 
    function(req, res, next){
        res.locals.admin=false
        next()
    } ,
    uploadController.get_detail
);

router.post('/', uploadController.post_detail);

module.exports = router;
