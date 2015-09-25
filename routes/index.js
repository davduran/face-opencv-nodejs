var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {
    cv.readImage("./prova.png", function(err, im) {
      if (err) throw err;
      if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

      img_hsv = im.copy();
      img_gray = im.copy();

      img_hsv.convertHSVscale();
      img_gray.convertGrayscale();

      im.save('./nor.png');
      img_hsv.save('./hsv.png');
      img_gray.save('./gray.png');

      img_crop = im.crop(50,50,250,250);
      img_crop.save('./crop.png');

      console.log('Image saved to ./{crop|nor|hsv|gray}.png');
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
