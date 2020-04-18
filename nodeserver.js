const http = require('http');
const fs = require('fs');
// const port = 3000;
const app = require('express')();
const express = require('express');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
app.locals.basedir = path.join(__dirname, 'public');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

/*
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.hubapi.com/contacts/v1/contact/',
  qs: { hapikey: '96ed62bd-be81-43d7-9da5-457dbef1817c' },
  headers:
   {
     'Content-Type': 'application/json' },
  body:
   { properties:
      [ { property: 'email', value: ''} ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
}); */
