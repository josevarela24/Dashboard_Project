var csv = require('fast-csv');
var mongoose = require('mongoose');
//var Author = require('./author');
var Country = require('../models/country');
//*fixed..this upload does not delete what is already inside db, need to implement drop feature
var async = require('async');

exports.get_detail = function(req, res, next) {
	
	async.parallel({
		/*
		one: function(callback){
			Country.aggregate([
				/* {
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
					'data' : '$nominalGDP'
					}
				}
				], callback);
		},
		*/
		one: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
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
				], callback);
		},

		two: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
					}
				},
				{
					$sort: {
						"gdpPpp": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$gdpPpp'
					}
				}		
				], callback);
		},

		three: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
					}
				},
				{
					$sort: {
						"population": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$population'
					}
				}		
				], callback);
		},

		four: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
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
				], callback);
		},

		five: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
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
				], callback);
		},

		six: function(callback){
			Country.aggregate([
				{			
					$match: {
						// $and: [
						// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
						// 	{year: 2017}
						// ]
						year: 2014
					}
				},
				{
					$sort: {
						"easeOfDoingBusiness": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$easeOfDoingBusiness'
					}
				}		
				], callback);
		},

		sevenA: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["USA", "Japan", "Canada", "France", "Germany", "Italy", "UK"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		sevenB: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["Brazil", "Russia", "India", "China"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},
	
		sevenC: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["Mexico", "Indonesia", "South Korea", "Turkey"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		sevenD: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["Singapore", "Hong Kong", "Australia", "South Africa", "Nigeria", "Saudi Arabia"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		ten: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["USA", "Japan", "Canada"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		eleven: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["France", "Germany", "Italy", "UK"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		twelve: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["USA", "Japan", "Canada"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		thirteen: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["France", "Germany", "Italy", "UK"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		fourteen: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["Brazil", "Russia", "India", "China"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		fifteen: function(callback){
			Country.aggregate([
				{
					$match: {
					name: { $in: ["Brazil", "Russia", "India", "China"]},
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
						realGDPGrowth: {$push: "$realGDPGrowth"}
					}
				}, 
				{
					$project: {
					_id: 0,
					name: "$_id",
					'data' : '$realGDPGrowth'
					}
				}
				], callback);
		},

		sixteenA: function(callback){
			Country.aggregate([
				{			
					$match: {
					name: { $in: ["India"]},		
					}
				},
				{
					$sort: {
						"population": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$population'
					}
				}		
				], callback);
		},

		sixteenB: function(callback){
			Country.aggregate([
				{			
					$match: {
					name: { $in: ["China"]},		
					}
				},
				{
					$sort: {
						"population": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$population'
					}
				}		
				], callback);
		},

		seventeenA: function(callback){
			Country.aggregate([
				{			
					$match: {
					name: { $in: ["Brazil"]},		
					}
				},
				{
					$sort: {
						"population": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$population'
					}
				}		
				], callback);
		},

		seventeenB: function(callback){
			Country.aggregate([
				{			
					$match: {
					name: { $in: ["Russia"]},		
					}
				},
				{
					$sort: {
						"population": -1
					}
				},
				{
					$project: {
					_id: 0,
					name: 1,
					'y' : '$population'
					}
				}		
				], callback);
		}


	}, function(err, results){
		if(res.locals.admin){
			console.log("I am admin")
			res.render('admin', { title: 'Test', gdp: results.one, ppp: results.two, pop: results.three, liv:results.four, spend:results.five, ease:results.six,
			gdpreala: results.sevenA, gdprealb: results.sevenB, gdprealc: results.sevenC, gdpreald: results.sevenD,  
			g7gdp1:results.ten, g7gdp2:results.eleven, g7cpi1:results.twelve, g7cpi2:results.thirteen, bricgdp:results.fourteen, 
			briccpi:results.fifteen, bricpop1a:results.sixteenA, bricpop1b:results.sixteenB, bricpop2a:results.seventeenA, bricpop2b:results.seventeenB});
		} else {
			console.log("I am NOT admin") 
			res.render('hello', { title: 'Test', gdp: results.one, ppp: results.two, pop: results.three, liv:results.four, spend:results.five, ease:results.six,
			gdpreala: results.sevenA, gdprealb: results.sevenB, gdprealc: results.sevenC, gdpreald: results.sevenD,  
			g7gdp1:results.ten, g7gdp2:results.eleven, g7cpi1:results.twelve, g7cpi2:results.thirteen, bricgdp:results.fourteen, 
			briccpi:results.fifteen, bricpop1a:results.sixteenA, bricpop1b:results.sixteenB, bricpop2a:results.seventeenA, bricpop2b:results.seventeenB});
		}
		// console.log(results.one);
		// console.log(results.two);
		
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