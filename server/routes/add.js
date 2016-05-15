var express = require('express');
var router = express.Router();


//Data
var statement;
var answer;
//Routes
router.post('/', function (req, res) {
  statement=req.body;
  answer = Number(statement.x) + Number(statement.y);
  res.send(answer);
  console.log(answer);
});






module.exports = router;
