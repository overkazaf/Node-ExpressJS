var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('tests', {title : 'Testing this page', author : 'John Nong', date : new Date().toUTCString()});
});


module.exports = router;