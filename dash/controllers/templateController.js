var json2csv = require('json2csv');

exports.get = function(req, res) {

	//var fields = Object.keys(Author.schema.obj);
	var fields = [
		'name',
		'year',
		'nominalGDP',
		'realGDP',
		'nominalGDPGrowth',
		'realGDPGrowth',
		'gdpPpp',
		'population',
		'populationGrowth',
		'consumerSpending',
		'easeOfDoingBusiness',
		'unemployment',
		'retailSalesGrowth'
	];

	var csv = json2csv({ data: '', fields: fields });

	res.set("Content-Disposition", "attachment;filename=countries.csv");
	res.set("Content-Type", "application/octet-stream");

	res.send(csv);

};