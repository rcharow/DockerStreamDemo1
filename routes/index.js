var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log("HITTING TEST ROUTE");
  console.log("AT TEST ROUTE",req.body.data)
  res.render('index', { title: req.body.data });
});

module.exports = router;
