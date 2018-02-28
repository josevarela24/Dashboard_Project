var csv = require('fast-csv');
var mongoose = require('mongoose');
//var Author = require('./author');
var Country = require('../models/country');
//*fixed..this upload does not delete what is already inside db, need to implement drop feature
var data = require('../vd.json')

exports.get_detail = function(req, res, next) {
	
	Country.aggregate([
		{
		  $match: {
			name: { $in: ["USA", "China", "India", "France", "Japan"]},
		  }
		},
		{
			$sort: {
				year: 1
			}
		},
		{
			$group: {
				_id: '$name',
				nominalGDP: {$push: "$nominalGDP"}
		  }
		}, 
		{
			$project: {
			_id: 0,
			name: "$_id",
			nominalGDP: 1
			}
		}
	  ], function(err, recs){
		if(err){
		  console.log(err);
		} else {
			console.log(recs);
		}
	});

	Country.aggregate([
		{			
			$match: {
				$and: [
					{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
					{year: 2017}
				]
		  }
		},
		{
			$sort: {
				"nominalGDP": -1
			}
		},
		{
		  $project: {
			_id: 0,
			name: 1,
			'y' : '$nominalGDP'
		  }
		}		
	  ], function(err, recs){
		if(err){
		  console.log(err);
		} else {
			res.render('random', { title: 'Alliance Data', data: data, pie: recs });
		}
	  });
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