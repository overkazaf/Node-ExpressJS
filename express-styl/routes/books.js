var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('<h1>Welcome to Book Page</h1>');
 	console.log('in book');
});

module.exports = router;
