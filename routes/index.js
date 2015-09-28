var express = require('express');
var router = express.Router();
var cv = require('opencv');

/* GET home page. */
router.get('/', function(req, res, next) {

/*cv.readImage("./public/prova.png", function(err, im) {
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
*/

try {
  var camera = new cv.VideoCapture(0);
  var window = new cv.NamedWindow('Video', 0)

  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;
      console.log(im.size())
      if (im.size()[0] > 0 && im.size()[1] > 0){
        window.show(im);
      }
      window.blockingWaitKey(0, 50);
    });
  }, 20);

} catch (e){
  console.log("Couldn't start camera:", e)
}

});

module.exports = router;
