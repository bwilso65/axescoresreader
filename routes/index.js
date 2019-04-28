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
	var url = determineBestUrlForCurrentDate();
	if(url === ""){
		res.render('index', {error: "There are no games scheduled for today"});
	}
	axios.get(url)
	  .then(function (response) {
		var tables = $('.matchList', response.data);
		res.render('index', {tables: tables});
	  })
	  .catch(function (error) {
		console.log(error);
		next(error);
	  });
});

// router.get('/fetchSchedule', function(req, res, next) {
	// axios.get(urlMonday+"?w=4")
	  // .then(function (response) {
		// var tables = $('.matchList', response.data);
		// res.setHeader('Content-Type', 'application/json');
		// res.end(JSON.stringify({tables: tables}));
	  // })
	  // .catch(function (error) {
		// console.log(error);
		// next(error);
	  // });
// });

function determineBestUrlForCurrentDate(){
	var today = new Date();
	var day = today.getDay();
	if(day == 1){
		return urlMonday + "?w="+diff_weeks(today, startDateMon);
	}
	else if(day == 2){
		return urlTuesday + "?w="+diff_weeks(today, startDateTues);
	}
	else{return ""}
}

function diff_weeks(dt2, dt1) {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff)) + 1;
 }

module.exports = router;
