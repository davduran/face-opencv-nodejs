var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {
    cv.readImage("./prova.jpg", function(err, im) {

        console.log(im);
        res.render('index', { im: im });
    });

});

module.exports = router;
