var express = require('express');
var router = express.Router();
const Orders = require ('../dispatchers/users')

router.get('/', function(req, res) {
  Orders
  .Orders
  .getAllOrders()
  .then(Orders => {
    res.json(Orders)
  })
});

router.get('/:id', function(req, res) {
  Orders
  .Orders
  .getOrderById(req.params.id)
  .then(Orders => {
    res.json(Orders)
  })
})

router.post('/', function(req, res) {
    Orders
    .Orders
    .postNewOrder(req.body)
    .then(Orders => {
      res.json(Orders)
    })
  })

module.exports = router;