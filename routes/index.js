var express = require('express');
var router = express.Router();
const $ = require('cheerio');
const axios = require('axios');

const urlMonday = 'https://axescores.com/Schedule/55844'; //?w= to get weekly schedule.
const urlTuesday = 'https://axescores.com/Schedule/55845';
const startDateMon = new Date('2019-04-01');
const startDateTues = new Date('2019-04-02');

/* GET home page. */
router.get('/', function(req, res, next) {
	axios.get(urlMonday+"?w=4")
	  .then(function (response) {
		var tables = $('.matchList', response.data);
		res.render('index', {tables: tables});
	  })
	  .catch(function (error) {
		console.log(error);
		next(error);
	  });
});

module.exports = router;
