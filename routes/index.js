var express = require('express');
var router = express.Router();

var lists = {
	list1: [
		{
			name: "iTunes Music OK GO",
			type: "TV Ad",
			start_date: new Date(2016, 0, 01),
			end_date: new Date(2016, 07, 01),
			order: 0
		},
		{
			name: "iPhone iMovie",
			type: "TV Ad",
			start_date: new Date(2016, 4, 13),
			end_date: new Date(2016, 11, 13),
			order: 1
		},
		{
			name: "iPhone Photos",
			type: "Web Banner",
			start_date: new Date(2016, 2, 06),
			end_date: new Date(2016, 09, 06),
			order: 2
		},
		{
			name: "iPhone 6s",
			type: "Web Video Ad",
			start_date: new Date(2016, 5, 27),
			end_date: new Date(2016, 10, 27),
			order: 3
		}
	],
	list2: [
		{
			name: "iMac",
			type: "Social Ads",
			start_date: new Date(2016, 3, 19),
			end_date: new Date(2016, 09, 19),
			order: 0
		},
		{
			name: "Macbook Pro",
			type: "Search Ad",
			start_date: new Date(2016, 2, 11),
			end_date: new Date(2016, 08, 11),
			order: 1
		},
		{
			name: "Apple Watch",
			type: "Web Video Ad",
			start_date: new Date(2016, 1, 02),
			end_date: new Date(2016, 08, 02),
			order: 2
		}
	]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', function(req, res, next) {
	res.json(lists);
});

router.put('/lists', function(req, res, next) {
	lists = req.body;
	res.send('Lists were saved');
});

module.exports = router;
