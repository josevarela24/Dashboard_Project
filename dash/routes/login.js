var express = require('express');
var router = express.Router();

// GET home page.
router.get('/admin', function(req, res, next) {
  res.redirect("/users");
});

router.post('/admin', function(req, res, next){
    if(req.body.email && req.body.password){
        return res.render('admin', {title: 'logged in'});
    } else{
        return res.send("No");
    }
});
module.exports = router;
