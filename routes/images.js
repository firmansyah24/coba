var express = require('express');
var router = express.Router();
const Images = require ('../dispatchers/users')

router.get('/', function(req, res) {
  Images
  .Images
  .getAllImages()
  .then(Images => {
    res.json(Images)
  })
});

router.get('/:id', function(req, res) {
  Images
  .Images
  .getImagesById(req.params.id)
  .then(Images => {
    res.json(Images)
  })
})

router.post('/', function(req, res) {
    Images
    .Images
    .postNewImage(req.body)
    .then(Images => {
      res.json(Images)
    })
  })

module.exports = router;