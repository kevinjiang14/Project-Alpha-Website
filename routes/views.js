const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	res.render('index', {
		title : "Project Alpha Homepage"
	});
});

router.get('/update', function(req, res){
	res.render('update', {
		title : "Project Alpha Updates"
	});
});

module.exports = {router: router};