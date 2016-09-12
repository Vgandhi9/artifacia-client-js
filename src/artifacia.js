"use strict";
var request = require('request');

// module.exports = artifacia;

exports.artifacia = function(api_key, callback){

	var ret;
	exports.upload_user_purchased_items = function(user_id,data,callback){

		var baseUrl = 'https://api.artifacia.com/v1/users/'+user_id+'/purchased_items';
		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'POST',
			json: true,
			body: data,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.upload_user_viewed_items = function(user_id, data, callback){

		var baseUrl = 'https://api.artifacia.com/v1/users/'+user_id+'/viewed_items';
		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};


		var options = {
			url: baseUrl,
			headers: headers,
			method: 'POST',
			json: true,
			body: data,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.upload_item_data = function(data, callback){

		var baseUrl = 'https://api.artifacia.com/v1/items';
		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'POST',
			json: true,
			body: data,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.delete_item_data = function(data, callback){

		var baseUrl = 'https://api.artifacia.com/v1/items';
		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'DELETE',
			json: true,
			body: data,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			 // console.log(body);
			 ret = body;
			 callback(ret)
		});
	}

	exports.get_visual_recommendation = function(prod_id, num, filters, callback){

		// console.log(prod_id);

		var baseUrl = 'https://api.artifacia.com/v1/recommendation/similar/'+prod_id+'/'+num+'?';
		for (var key in filters){
			baseUrl = baseUrl+key+'='+filters[key]+'&'
		}
		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			console.log(body);
			ret = body;
			callback(ret)
		});
	}

	exports.get_cpr_recommendation = function(prod_id, num, callback){

		// console.log(prod_id);

		var baseUrl = 'https://api.artifacia.com/v1/recommendation/collections/'+prod_id+'/'+num;

		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}
	exports.get_personalized_recommendation = function(user_id, num, callback){

		// console.log(prod_id);

		var baseUrl = 'https://api.artifacia.com/v1/recommendation/users/'+user_id+'/'+num;

		var headers = {
			'Content-Type' : 'application/json',
			'api_key' : api_key
		};

		var options = {
			url: baseUrl,
			headers: headers,
			method: 'GET',
			json: true,
			rejectUnauthorized: false
		};
		request(options, function (error, response, body) {
			// console.log('Error: ', error);
			// console.log('Status: ', response.statusCode);
			//  console.log(body);
			ret = body;
			callback(ret)
		});
	}
}
