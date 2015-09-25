var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {
cv.readImage("http://cdn.alabern.iseic.net/authors/amadeu-marine-vadalaco.jpg", function(err, im){
console.log(err);
console.log(im);
});

  res.render('index', { title: 'Express' });
});

module.exports = router;
