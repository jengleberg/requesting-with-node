'use strict'

const request = require('request');
const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCBnq_jGi2RW6neA_sLlPn8RwdN4AKp-D4&cx=000886761285250742499:wtmhnmzut4a&q=';

const get = function(movieTitle) {
	request(url,  function(error, response, body) {
	console.log(url + JSON.parse(body).title);

	});

};


module.exports = get;
