var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log("HITTING TEST ROUTE");
  console.log("AT TEST ROUTE",req.body)
  req.setEncoding('utf8');
  var retStr = "";
  req.on('data',function(chunk){
    retStr+=chunk;
  });
  req.on('end',function(){
    console.log(JSON.stringify(retStr));
    res.send('success!');
  })
});

module.exports = router;
