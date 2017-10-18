'use strict'



function get(film) {

const apiKey = require("./env");
const apiId = require("./inv");

const request = require('request');
const url = 'https://www.googleapis.com/customsearch/v1?key='+apiKey+'&cx='+apiId+'&q=' + film;


	request(url,  function(error, response, body) {
	console.log(url + JSON.parse(body).items[0].snippet);

	});

	request(url, function(error, response, body) {
		console.log(JSON.parse(body).items[0].link);
	});

}


module.exports = get;
