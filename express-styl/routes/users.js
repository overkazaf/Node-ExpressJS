var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('<h1>Welcome to User Page</h1>');
 	console.log('in user');
});

module.exports = router;
