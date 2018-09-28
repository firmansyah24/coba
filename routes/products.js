var express = require('express');
var router = express.Router();
const Products = require ('../dispatchers/users')

/* GET users listing. */
router.get('/', function(req, res) {
  Products
  .Products
  .getAllProducts()
  .then(Products => {
    res.json(Products)
  })
});

router.get('/:id', function(req, res) {
  Products
  .Products
  .getProductById(req.params.id)
  .then(Products => {
    res.json(Products)
  })
})

router.post('/', function(req, res) {
    Products
    .Products
    .postNewProduct(req.body)
    .then(Products => {
      res.json(Products)
    })
  })

module.exports = router;