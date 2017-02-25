var express = require('express');
var converter = require('./converter');
var app = express();

app.get('/*', function(req, res) {
  var value = +req.url.slice(1);

  var result = converter.convert(value);

  res.json(result);
});

module.exports = app;