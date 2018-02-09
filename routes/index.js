var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test', null);
});

router.get('/cn_page', function(req, res, next) {
  res.render('cn_page', null);
});

module.exports = router;
