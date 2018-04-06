var express = require('express');
var router = express.Router();
var Country = require('../models/country');

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

//right here
//create a new country Carthage
var carth = new Country({
  name: 'Carthage',
  year: 2015,
  nominalGDP: 19,
  realGDP: 4, 
  nominalGDPGrowth: 16,
  realGDPGrowth: 2.1, 
  gdpPpp: 2, 
  population: 326,
  populationGrowth: 0.8, 
  consumerSpending: 67, 
  easeOfDoingBusiness: 5, 
  unemployment: 4, 
  retailSalesGrowth: 1
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
carth.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});


module.exports = router;
