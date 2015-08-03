var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(process.env.POR || 5000);

module.exports = app;