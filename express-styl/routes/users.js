var express = require('express');
var url = require('url');
var qs = require('querystring');
var router = express.Router();
var log = console.log;
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('<h1>Welcome to User Page</h1>');
 	console.log('in user');
});

router.get('/login', function(req, res, next) {
	var uri = url.parse(req.url);
	var data = qs.parse(uri.query);


	res.send('<h1>Logging in</h1>');
	var username = data['user'];
	if(username === 'john'){
		log('success');
	}
});

module.exports = router;
