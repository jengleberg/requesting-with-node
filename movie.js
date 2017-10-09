'use strict'

function get(film) {

const request = require('request');
const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCBnq_jGi2RW6neA_sLlPn8RwdN4AKp-D4&cx=000886761285250742499:wtmhnmzut4a&q=' + film;


	request(url,  function(error, response, body) {
	console.log(url + JSON.parse(body).items[0].snippet);

	});

	request(url, function(error, response, body) {
		console.log(JSON.parse(body).items[0].link);
	});

}


module.exports = get;
