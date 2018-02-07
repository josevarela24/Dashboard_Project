var csv = require('fast-csv');
var mongoose = require('mongoose');
//var Author = require('./author');
var Country = require('../models/country');
//*fixed..this upload does not delete what is already inside db, need to implement drop feature
var data = require('../vd.json')

exports.get_detail = function(req, res, next) {
	console.log("Hello you");
	res.render('random', { title: 'Alliance Data', data: data });
}

exports.post_detail = function (req, res, next) {
	if (!req.files){
		return res.status(400).send('No files were uploaded.');
    }
	var countryFile = req.files.file;
	//console.log(countryFile);
	var countries = [];
		
	csv
	 .fromString(countryFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 countries.push(data);
	 })
	 .on("end", function(){
		//this removes documents only on first upload***
		//fixed! now removes documents on each
		Country.remove({}, function(err,removed) {});

		 Country.create(countries, function(err, documents) {
			if (err) throw err;
			//console.log(countries);
			//res.send(countries.length + ' countries have been successfully uploaded.');
			res.redirect('/users');
		});
	 });
};