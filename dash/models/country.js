var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    year: { 
        type: Number, 
        required: true
    },
    nominalGDP: Number,
    realGDP: Number, 
    nominalGDPGrowth: Number,
    realGDPGrowth: Number, 
    gdpPpp: Number, 
    population: Number,
    populationGrowth: Number, 
    consumerSpending: Number, 
    easeOfDoingBusiness: Number, 
    unemployment: Number, 
    retailSalesGrowth: Number
});
//custom method, can even do queries here I think
//dudify is method name
countrySchema.methods.dudify = function() {
    // add some stuff to the users name
    this.name = this.name + '-dude'; 
  
    return this.name;
  };

countrySchema.find({}, function(err, name) {
    if (err) throw err;
  
    // object of all the users
    console.log(name);
  });

var Country = mongoose.model('Country', countrySchema);

// make this available to our users in our Node applications
module.exports = Country;