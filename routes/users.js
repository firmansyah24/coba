var express = require('express');
var router = express.Router();
const Users = require ('../dispatchers/users')

/* GET users listing. */
router.get('/', function(req, res) {
  Users
  .Users
  .getAllUsers()
  .then(Users => {
    res.json(Users)
  })
});

router.get('/:id', function(req, res) {
  Users
  .Users
  .getUserById(req.params.id)
  .then(Users => {
    res.json(Users)
  })
})

router.post('/', function(req, res) {
  Users
  .Users
  .postNewUser(req.body)
  .then(Users => {
    res.json(Users)
  })
})

module.exports = router;