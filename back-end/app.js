const express=require('express');
//引入路由
const userRouter=require('./router/user');
const shopRouter=require('./router/shop');
const index=require('./router/index');
const shopcart=require('./router/shopcart')
const settlement=require('./router/settlement');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入session
const session=require('express-session');
var app=express();
//配置session
app.use(session({
    secret:'128位字符串',       //安全字符串
    resave:true,               //请求时更新数据
    saveUninitialized:true     //保存初始数据
}))
app.listen(8080);
//托管静态资源到public目录下
app.use(express.static('../public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended:false//不是第三方的qs模块，惹事室友querystring模块
}))
//使用路由器
app.use('/user',userRouter);
app.use('/shop',shopRouter);
app.use('/index',index);
app.use('/shopcart',shopcart);
app.use('/settlement',settlement);

