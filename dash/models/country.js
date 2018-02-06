var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    year: Number, 
    nominalGDP: Number,
    realGDP: Number, 
    nominalGDPGrowth: Number,
    realGDPGrowth: Number, 
    gdpPpp: Number, 
    population: Number,
    populationGrowth: Number, 
    consumerSpending: Number, 
    easeOfDoingBusiness: Number, 
    unemploymment: Number, 
    retailSalesGrowth: Number
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;