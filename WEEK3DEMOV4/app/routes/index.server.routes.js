/*File Name: index.server.routes.js*/
/*Student Name: Curtis Carpio*/
/*Student ID: 301322854*/
/*Date: October 4th, 2023*/

var express = require('express');
var router = express.Router();

/* GET home page. */

//Define routes with corresponding route paths
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curtis Carpio\'s Site' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});



module.exports = router;
