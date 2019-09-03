const express=require('express');
//引入路由
const userRouter=require('./router/user');
const proRouter=require('./router/product');
const index=require('./router/index');
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
//托管静态资源到public目录下
app.use(express.static('../public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended:false//不是第三方的qs模块，惹事室友querystring模块
}))
//使用路由器
app.use('/user',userRouter);
app.use('/product',proRouter);
app.use('/index',index);

