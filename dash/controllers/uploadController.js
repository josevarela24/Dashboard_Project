var csv = require('fast-csv');
var mongoose = require('mongoose');
//var Author = require('./author');
var Country = require('../models/country');
//*fixed..this upload does not delete what is already inside db, need to implement drop feature
var async = require('async');


// var year = Country.find().sort({year:-1}).limit(1);
// console.log("max year is ", year);

exports.getGDPfunc = function(yr,callback){
	console.log("UPINHURR");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
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
			'y' : '$nominalGDP',
			color: {
				$cond: { 
					if: 
						{ $lte: [ "$nominalGDPGrowth", .01 ] }
					
					,then: "#E9FFDD", 
					else: 
						{
							$cond:{
								if: 
								{ $lte: [ "$nominalGDPGrowth", .02 ] }
								,then: "#C3E2B2",
								else:	{
									$cond:{
										if: 
										{ $lte: [ "$nominalGDPGrowth", .03 ] }
										,then: "#93BD7C",
										else:	{	
											$cond:{
												if: 
												{ $lte: [ "$nominalGDPGrowth", .04 ] }
												,then: "#78B05A",
												else:	{	
													$cond:{
														if: 
														{ $lte: [ "$nominalGDPGrowth", .05 ] }
														,then: "#406C29",
														else:	"#375824"
													}
												}
											}
										}
									}
								} 
						} 
					}
					
				}
			}	
			
			
			}
		}		
	], callback);
};

exports.getPPPfunc = function(yr,callback){
	console.log("UPINTWO");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
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
	}], callback);
};

exports.getPopfunc = function(yr,callback){
	console.log("UPINPOP");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
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
			'y' : '$population',	
			}
		}		
	], callback);
};

exports.getNGDPfunc = function(yr,callback){
	console.log("UPINFO");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
			}
		},
		{
			$sort: {
				"gdpPerCapita": -1
			}
		},
		{
			$project: {
			_id: 0,
			name: 1,
			'y' : '$gdpPerCapita'
		}
	}], callback);
};

exports.getNFGDPfunc = function(yr,callback){
	console.log("UPINFive");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
			}
		},
		{
			$sort: {
				"consumerSpending": -1
			}
		},
		{
			$project: {
			_id: 0,
			name: 1,
			'y' : '$consumerSpending'
		}
	}], callback);
};

exports.getEasefunc = function(yr,callback){
	console.log("UPINSIX");
	Country.aggregate([
		{			
			$match: {
				// $and: [
				// 	{name: { $in: ["USA", "China", "India", "France", "Japan"]}},
				// 	{year: max}
				// ]
				year: yr
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
	}], callback);
};

exports.get_detail = function(req, res, next) {
	
	Country.findOne()
		.sort('-year')
		.exec(function(err, doc)
		{
			var max = doc.year;
			console.log(max);
			// ...
			async.parallel({
		
				one: function(callback){
					//needs to be*************(yr, callback)
					module.exports.getGDPfunc(max,callback);
				},
		
				two: function(callback){
					Country.aggregate([
						{			
							$match: {
								year: max
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
							'y' : '$gdpPpp',
							color: {
								$cond: { 
									if: 
										{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
									
									,then: "#f7a35c", 
									else: 
										{
											$cond:{
												if: 
												{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
												,then: "#434348",
												else:
													{
														$cond:{
															if: 
															{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
															,then: "#7CB5EC",
															else: "#90ED7D"
														}
													}
										} 
									}
									
								}
							}	
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
								// 	{year: max}
								// ]
								year: max
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
							'y' : '$population',
							color: {
								$cond: { 
									if: 
										{ $lte: [ "$populationGrowth", 0 ] }
									
									,then: "#FCC3AE", 
									else: 
										{
											$cond:{
												if: 
												{ $gte: [ "$populationGrowth", .02 ] }
												,then: "#214449",
												else:	"#9EE0EA"
										} 
									}
									
								}
							}	
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
								// 	{year: max}
								// ]
								year: max
							}
						},
						{
							$sort: {
								"gdpPerCapita": -1
							}
						},
						{
							$project: {
							_id: 0,
							name: 1,
							'y' : '$gdpPerCapita',
							color: {
								$cond: { 
									if: 
										{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
									
									,then: "#f7a35c", 
									else: 
										{
											$cond:{
												if: 
												{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
												,then: "#434348",
												else:
													{
														$cond:{
															if: 
															{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
															,then: "#7CB5EC",
															else: "#90ED7D"
														}
													}
										} 
									}
									
									}
								}	
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
								// 	{year: max}
								// ]
								year: max
							}
						},
						{
							$sort: {
								"consumerSpending": -1
							}
						},
						{
							$project: {
							_id: 0,
							name: 1,
							'y' : '$consumerSpending',
							color: {
								$cond: { 
									if: 
										{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
									
									,then: "#f7a35c", 
									else: 
										{
											$cond:{
												if: 
												{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
												,then: "#434348",
												else:
													{
														$cond:{
															if: 
															{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
															,then: "#7CB5EC",
															else: "#90ED7D"
														}
													}
										} 
									}
									
									}
								}	
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
								// 	{year: max}
								// ]
								year: max
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
							'y' : '$easeOfDoingBusiness',
							color: {
								$cond: { 
									if: 
										{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
									
									,then: "#f7a35c", 
									else: 
										{
											$cond:{
												if: 
												{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
												,then: "#434348",
												else:
													{
														$cond:{
															if: 
															{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
															,then: "#7CB5EC",
															else: "#90ED7D"
														}
													}
										} 
									}
									
									}
								}	
							}
						}		
						], callback);
				},
		
				seven: function(callback){
					Country.aggregate([
						{
							$project:{
								id: 1,
								name: "$name",
								year: "$year",
								realGDPGrowth: "$realGDPGrowth",
								group: {
									$cond: { 
										if: 
											{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
										
										,then: "G7", 
										else: 
											{
												$cond:{
													if: 
													{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
													,then: "BRIC",
													else:
														{
															$cond:{
																if: 
																{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
																,then: "MIST",
																else: "TIER 4"
															}
														}
											} 
										}
										
									}
								}					
							}
						},	
						{
							$group: {
								_id: {name: '$group', year: '$year'},				
								data: {$sum: '$realGDPGrowth'}
		
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id.name',
								year: '$_id.year',
								data: '$data'
							}
						},
						{
							$sort: {
								year: 1
							}
						},
						{
							$group:{
								_id: '$name',
								data: {$push: {y: '$data', x: '$year'}}
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id',
								data: '$data'
							}
						},
						
						], callback);
				},
		
				eight: function(callback){
					Country.aggregate([
						{
							$project:{
								id: 1,
								name: "$name",
								year: "$year",
								nominalGDP: "$nominalGDP",
								group: {
									$cond: { 
										if: 
											{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
										
										,then: "G7", 
										else: 
											{
												$cond:{
													if: 
													{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
													,then: "BRIC",
													else:
														{
															$cond:{
																if: 
																{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
																,then: "MIST",
																else: "TIER 4"
															}
														}
											} 
										}
										
									}
								}					
							}
						},	
						{
							$group: {
								_id: {name: '$group', year: '$year'},				
								data: {$sum: '$nominalGDP'}
		
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id.name',
								year: '$_id.year',
								data: '$data'
							}
						},
						{
							$sort: {
								year: 1
							}
						},
						{
							$group:{
								_id: '$name',
								data: {$push: {y: '$data', x: '$year'}}
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id',
								data: '$data'
							}
						},
						
						], callback);
				},
		
				nine: function(callback){
					Country.aggregate([
						{
							$project:{
								id: 1,
								name: "$name",
								year: "$year",
								population: "$population",
								group: {
									$cond: { 
										if: 
											{ $or: [ { $eq: [ "$name", "USA" ] }, { $eq: [ "$name", "Japan" ]}, { $eq: [ "$name", "Germany" ] }, { $eq: [ "$name", "Canada" ] }, { $eq: [ "$name", "Italy" ] }, { $eq: [ "$name", "UK" ] }, { $eq: [ "$name", "France" ] } ] }
										
										,then: "G7", 
										else: 
											{
												$cond:{
													if: 
													{ $or: [ { $eq: [ "$name", "China" ] }, { $eq: [ "$name", "India" ] }, { $eq: [ "$name", "Brazil" ] }, { $eq: [ "$name", "Russia" ] } ] }
													,then: "BRIC",
													else:
														{
															$cond:{
																if: 
																{ $or: [ { $eq: [ "$name", "Mexico" ] }, { $eq: [ "$name", "Indonesia" ] }, { $eq: [ "$name", "South Korea" ] }, { $eq: [ "$name", "Turkey" ] } ] }
																,then: "MIST",
																else: "TIER 4"
															}
														}
											} 
										}
										
									}
								}					
							}
						},	
						{
							$group: {
								_id: {name: '$group', year: '$year'},				
								data: {$sum: '$population'}
		
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id.name',
								year: '$_id.year',
								data: '$data'
							}
						},
						{
							$sort: {
								year: 1
							}
						},
						{
							$group:{
								_id: '$name',
								data: {$push: {y: '$data', x: '$year'}}
							}
						},
						{
							$project: {
								_id: 0,
								name: '$_id',
								data: '$data'
							}
						},
						
						], callback);
				},
		
				ten: function(callback){
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
								data: {$push: {x: "$year", y: "$realGDPGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				eleven: function(callback){
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
								data: {$push: {x: "$year", y: "$cpiGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				twelve: function(callback){
					Country.aggregate([
						{
							$match: {
							name: { $in: ["USA", "Canada", "Japan", "France", "Germany", "Italy", "UK"]},
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
								data: {$push: {x: "$year", y: "$unemployment"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},

				thirteen: function(callback){
					Country.aggregate([
						{
							$match: {
							name: { $in: ["USA", "Canada", "Japan", "France", "Germany", "Italy", "UK"]},
							//group: "G7"
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
								data: {$push: {x: "$year", y: "$retailSalesGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
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
								data: {$push: {x: "$year", y: "$realGDPGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
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
								data: {$push: {x: "$year", y: "$cpiGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				sixteen: function(callback){
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
								data: {$push: {x: "$year", y: "$population"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}	
						], callback);
				},
		
				seventeen: function(callback){
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
								data: {$push: {x: "$year", y: "$unemployment"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},

				eighteen: function(callback){
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
								data: {$push: {x: "$year", y: "$retailSalesGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},

				nineteen: function(callback){
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
								data: {$push: {x: "$year", y: "$realGDPGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				twenty: function(callback){
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
								data: {$push: {x: "$year", y: "$cpiGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				twentyone: function(callback){
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
								data: {$push: {x: "$year", y: "$population"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}		
						], callback);
				},
		
				twentytwo: function(callback){
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
								data: {$push: {x: "$year", y: "$unemployment"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},

				twentythree: function(callback){
					Country.aggregate([
						{
							$match: {
							name: { $in: ["Mexico", "Indonesia", "South Korea", "Turkey"]},
								//name: "Mexico",
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
								data: {$push: {x: "$year", y: "$retailSalesGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},

				twentyfour: function(callback){
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
								data: {$push: {x: "$year", y: "$realGDPGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				twentyfive: function(callback){
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
								data: {$push: {x: "$year", y: "$cpiGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},
		
				twentysix: function(callback){
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
								data: {$push: {x: "$year", y: "$population"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}	
						], callback);
				},
		
				twentyseven: function(callback){
					Country.aggregate([
						{
							$match: {
							name: { $in: ["Singapore", "Hong Kong", "South Africa", "Nigeria", "Saudi Arabia", "Australia"]},
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
								data: {$push: {x: "$year", y: "$unemployment"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
				},			
		
				twentyeight: function(callback){
					Country.aggregate([
						{
							$match: {
							name: { $in: ["Singapore", "Hong Kong", "South Africa", "Nigeria", "Saudi Arabia", "Australia"]},
							//name: "Hong Kong"
							//group: "Tier 4"
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
								data: {$push: {x: "$year", y: "$retailSalesGrowth"}}
							}
						}, 
						{
							$project: {
							_id: 0,
							name: "$_id",
							data: 1
							//'data' : '$data'
							}
						}
						], callback);
					},
		
				twentynine: function(callback){
					Country.find().distinct('year', callback);
				}
		
			}, function(err, results){
				if(res.locals.admin){
					console.log("I am admin")
					res.render('admin', { title: 'Test', gdp:results.one, ppp:results.two, pop:results.three, 
					liv:results.four, spend:results.five, ease:results.six,
					gdpreal:results.seven, gdpnom:results.eight, grpop:results.nine,
					g7gdp:results.ten, g7cpi:results.eleven, ug7:results.twelve, retg7:results.thirteen,
					bricgdp:results.fourteen, briccpi:results.fifteen, bricpop:results.sixteen, ubric:results.seventeen, retbric:results.eighteen, 
					mistgdp:results.nineteen, mistcpi:results.twenty, mistpop:results.twentyone, umist:results.twentytwo, retmist:results.twentythree, 
					gdp4:results.twentyfour, cpi4:results.twentyfive, pop4:results.twentysix, u4:results.twentyseven, ret4:results.twentyeight, 
					year:results.twentynine});
				} else {
					console.log("I am NOT admin") 
					//console.log(results.ten)
					//console.log(results.twelve)
					//console.log(results.eight)
					res.render('hello', { title: 'Test', gdp:results.one, ppp:results.two, pop:results.three, 
					liv:results.four, spend:results.five, ease:results.six,
					gdpreal:results.seven, gdpnom:results.eight, grpop:results.nine,
					g7gdp:results.ten, g7cpi:results.eleven, ug7:results.twelve, retg7:results.thirteen,
					bricgdp:results.fourteen, briccpi:results.fifteen, bricpop:results.sixteen, ubric:results.seventeen, retbric:results.eighteen, 
					mistgdp:results.nineteen, mistcpi:results.twenty, mistpop:results.twentyone, umist:results.twentytwo, retmist:results.twentythree, 
					gdp4:results.twentyfour, cpi4:results.twentyfive, pop4:results.twentysix, u4:results.twentyseven, ret4:results.twentyeight, 
					year:results.twentynine});
				}
				// console.log(results.one);
				// console.log(results.two);
				
			});	
		}
	);

	
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
			res.redirect('/admin');
		});
		/*
		Country.update({"name": "Hong Kong"}, {group: "Tier 4"}, {multi: true}, 
		 	function(err, affected, resp) {
			   console.log(resp);
		})
		*/
		console.log("create")
		/*
		Country.updateMany(
			{ },
			{ $set:
			   {
				 "group": "Tier 4"
			   }
			},
			{
				upsert: false
			}
		 )
		 */
		//Country.update({name: 'Hong Kong'}, {group: 'Tier 4' }, {multi: true})

		console.log("update")
		
	 });
};