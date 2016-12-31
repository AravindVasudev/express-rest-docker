var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    title: 'Express-REST-Docker',
    description: 'A simple Boilerplate to build REST API in Express'
  });
});

module.exports = router;
