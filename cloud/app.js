// 在Cloud code里初始化express框架
var express = require('express');
var app = express();
var name = require('cloud/name.js');
var avosExpressHttpsRedirect = require('avos-express-https-redirect');


// App全局配置
//设置模板目录
if(__production)
	app.set('views', 'cloud/views');
else
	app.set('views', 'cloud/dev_views');
app.set('view engine', 'ejs');    // 设置template引擎
app.use(avosExpressHttpsRedirect()); //启用HTTPS
app.use(express.bodyParser());    // 读取请求body的中间件

//使用express路由API服务/hello的http GET请求
app.get('/hello', function(req, res) {
	res.render('hello', { message: 'Congrats, you just set up your app!' });
});

// 创建一个AV.Object子类Visitor.
var PostCollection = AV.Collection.extend({
  model: PostObject
});
var collection = new PostCollection();
collection.fetch({
  success: function(collection) {
    collection.each(function(object) {
      console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
// The Collection of TestObjects that match a complex query.
var query = new AV.Query(TestObject);
query.equalTo("temperature", "hot");
query.greaterThan("degreesF", 100);
var collection = query.collection();

app.get('/post/:id', function(req, res) {
    var id = req.params._id
	res.render('post', { title: title });
});

}

//使用express路由API服务 / 的http GET请求
//使用express路由API服务 /的http POST请求


// This line is required to make Express respond to http requests.
app.listen();
