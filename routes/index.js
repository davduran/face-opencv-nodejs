var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {

cv.readImage("./public/prova.png", function(err, im) {
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.detectObject("./public/cascade.xml", {}, function(err, faces){
    if (err) throw err;

    for (var i = 0; i < faces.length; i++){
      var face = faces[i];
      im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2);
    }

    im.save('./public/face-detection.png');
    console.log('Image saved to ./public/face-detection.png');

      res.render('index', { faces: faces.length});
  });
  });
});

module.exports = router;
