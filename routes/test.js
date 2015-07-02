var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log("AT TEST ROUTE",req.body.data)
  res.render('index', { title: req.body.data });
});

module.exports = router;
