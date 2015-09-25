var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {
cv.readImage("./prova.png", function(err, im) {
  if (err) throw err;

  var width = im.width();
  var height = im.height();
  if (width < 1 || height < 1) throw new Error('Image has no size');

  var srcArray = [0, 0, width, 0, width, height, 0, height];
  var dstArray = [0, 0, width * 0.9, height * 0.1, width, height, width * 0.2, height * 0.8];
  var xfrmMat = im.getPerspectiveTransform(srcArray, dstArray);
  im.warpPerspective(xfrmMat, width, height, [255, 255, 255]);
  im.save("./warp-image.png");
  console.log('Image saved to ./warp-image.png');
});
  res.render('index', { title: 'Express' });
});

module.exports = router;
