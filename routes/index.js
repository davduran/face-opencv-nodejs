var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {
    var cv = require('opencv');
    cv.readImage('./prova.jpg', function(err, im) {
      if (err) throw err;
      if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

      img_hsv = im.copy();
      img_gray = im.copy();

      img_hsv.convertHSVscale();
      img_gray.convertGrayscale();

      im.save('./tmp/nor.png');
      img_hsv.save('./tmp/hsv.png');
      img_gray.save('./tmp/gray.png');

      img_crop = im.crop(50,50,250,250);
      img_crop.save('./tmp/crop.png');

      console.log('Image saved to ./tmp/{crop|nor|hsv|gray}.png');
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
