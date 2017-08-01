`npm i mongoose -S nodemon -D`
这样会导致两个依赖都安装到
```
"devDependencies": {
    "mongoose": "^4.11.4",
    "nodemon": "^1.11.0"
  }
```

使用命令`nodemon`监听代码变化

注释掉了route.all('*',function(req,res,next){
	// res.header("Content-Type", "application/json");
	})
不然ejs会返回xml

find({'_id': ""})

req.query

如果超出express最大请求，在app.js中加
// app.use(bodyParser.json({"limit": "10000kb"}));