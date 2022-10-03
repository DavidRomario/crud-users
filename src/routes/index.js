var express = require('express'); // framework api rest
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({
    success: true,
    message: "api running"
  });
});

module.exports = router;
