var express = require('express');
var constants = require('./app/constants');
var jsoncache = require('./app/jsoncache');
var initcode = require('./app/initialization');
var app = express();

initcode.refreshGDocs();

app.get('/gdocs/:id', function(req, res) {
  var fileid = req.params.id; 
  console.log('Request received for: ' + fileid);
  var data = jsoncache.getFileContent(fileid);
  res.type('text/json');
  res.send(data);
});

app.listen(constants.NODEJS_PORT);
