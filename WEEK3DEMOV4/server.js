/*File Name: server.js*/
/*Student Name: Curtis Carpio*/
/*Student ID: 301322854*/
/*Date: October 4th, 2023*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
