var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/data', (req, res) => {
  res.json({message: "This is json message of route"});
});

module.exports = router;
