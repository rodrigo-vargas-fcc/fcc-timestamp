'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app, db);

app.listen(3000, function () {
   console.log('Node.js listening on port 3000...');
});