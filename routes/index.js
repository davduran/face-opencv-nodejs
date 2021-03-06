var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {

var COLOR = [204, 204, 204]; // default red
var thickness = 2; // default 1

cv.readImage('./public/prova.png', function(err, im) {
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.detectObject('./public/cascade.xml', {}, function(err, faces) {
    if (err) throw err;

    for (var i = 0; i < faces.length; i++) {
      face = faces[i];
      im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);

      var im2 = im.roi(face.x, face.y, face.width, face.height)
      im2.save('./public/faces/face'+i+'.jpg')
    }

    im.save('./public/face-detection.png');
    res.render('index', { faces: faces.length});
  });

});

});

module.exports = router;
