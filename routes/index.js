var express = require('express');
var router = express.Router();
var Sign = require('../models/signInfo.js');

router.all('*',function(req,res,next){
	console.log(req);
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Expose-Headers", "*");
    res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json");
    next();
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/getResult',function(req,res,next){
	Sign.find({}).sort({signTime: -1}).then(signInfo => {
		res.json({result:signInfo})
	})
	.catch(err => {
		res.json(err)
	})
})
router.get('/api/getById',function(req,res,next){
	console.log(req.query.userId);
	var userId=req.query.userId;
	Sign.find({'_id': userId}).then(signInfo => {
		console.log('success find');
		res.json({result:signInfo})
	})
	.catch(err => {
		res.json(err)
	})
})

router.post('/new_post',function(req,res){
	// console.log(req.originalUrl);
	// console.log(req.url);
	// console.log(req.body);
	console.log(req);
	Sign.create(req.body,(err,signInfo) => {
		if (err) {
			console.log(err);
		}else{
			console.log('create success');
			res.json(signInfo)
		}
	})
})

module.exports = router;
