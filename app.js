const http = require('http');
const fs = require('fs');
const app = require('express')();
const express = require('express');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
app.locals.basedir = path.join(__dirname, 'public');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/newsletter', (req, res) => {
	request.post(
		'hi avante', //- put your link in here my guy
		{
			json: {
				"properties": [
					{
						"property": "email",
						"value": req.body.email
					}
				]
			}
		},
		(error, res, body) => {
			if (error) {
			console.error(error)
			return
			}
			console.log(`statusCode: ${res.statusCode}`)
			console.log(body)
		}
	)
	let response = JSON.stringify({
		'message':'success'
	});
	res.send(response);
})

app.listen(3000, function () {
	console.log('Avante is a poopy head');
});