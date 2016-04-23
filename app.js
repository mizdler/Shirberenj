'use strict'

var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

var baseURL = 'https://api.telegram.org/bot216457967:AAGB9GtTbB0IamtlwrbCkfORISbEEISORlA';
var setWebhook = baseURL + '/setWebhook';
var getUpdatesURL = baseURL + '/getUpdates';


request(
	{
		url: setWebhook,
		method: "POST",
		timeout: 10000,
		headers: {
			"content-type": "application/json"
		},
		body: "url=https://ineshiman.com"
	},
	function(error, response, body){
		if (error)
			console.log(error);
		else
			console.log(body);
	}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/216457967:AAGB9GtTbB0IamtlwrbCkfORISbEEISORlA', function(req, res){
	console.log(req.body);
	res.json({success: true});
});

module.exports = app;