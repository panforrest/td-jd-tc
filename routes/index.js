var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/en_page', function(req, res, next) {
  res.render('en_page', null);
});

router.get('/cn_page', function(req, res, next) {
  res.render('cn_page', null);
});

module.exports = router;
