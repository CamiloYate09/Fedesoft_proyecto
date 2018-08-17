var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
