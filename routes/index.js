var express = require('express');
var router = express.Router();

var lists = {
	list1: [
		{
			name: "Sheff",
			order: 0
		},
		{
			name: "Andrew",
			order: 1
		}
	],
	list2: [
		{
			name: "Abi",
			order: 0
		},
		{
			name: "Sue",
			order: 1
		}
	]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', function(req, res, next) {

	res.json(lists);
})

module.exports = router;
