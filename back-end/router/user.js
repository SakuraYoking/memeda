const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//登录
router.post('/login',(req,res)=>{//获取登录传递过来的值
//获取数据
var sql=req.body
//验证数据是否为正确
console.log(sql)
if(!sql.phone&&!sql.email){
    res.send({code:401,msg:'uname required'});
		return;
}else if(!sql.upwd){
    res.send({code:402,msg:'upwd required'});
    return;
}
pool.query('select * from memeda_user where (phone=? or email=?) and upwd=?',[sql.phone,sql.email,sql.upwd],function(err,result){
    if(err) throw err;
    //判断数据长度是否大于0
    if(result.length>0){
        req.session.uid=result[0].uid
        res.send({code:200,msg:'登录成功'})
    }else{
        res.send({code:403,msg:'登录失败'})
    }
})
})
//获取登录状态
router.get('/getSession',(req,res)=>{
    var uid = req.session.uid
    if(uid){
        res.send({code:1,msg:'已登录'})
    }else{
        res.send({code:-1,msg:'未登录'})
    }
})
//注册
router.post('/reg',(req,res)=>{
    var obj=req.body
    if(!obj.phone&&!obj.email){
        res.send({code:401,msg:'uname required'});
            return;
    }else if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    var sql='select uid from memeda_user where email=? or phone=?'
    pool.query(sql,[obj.email,obj.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:403,msg:'邮箱或电话已存在'})
            return;
        }else{
            //生成6位随机用户名user_name
            var arr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            var uname_user="";
            for(var i=0;i<6;i++){
                //生成arr的随机下标
                var num=Math.floor(Math.random()*arr.length);
                uname_user+=arr[num];
            }
            var sql;
            var reg=/\d{11}/;
            var regs=/@/;
            if(reg.test(obj.phone)){
                sql="insert into memeda_user(phone,upwd,uname_user) values(?,?,?)"
            }else if(regs.test(obj.phone)){
                sql="insert into memeda_user(email,upwd,uname_user) values(?,?,?)"
            }
            pool.query(sql,[obj.phone,obj.upwd,uname_user],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send({code:404,msg:'注册成功'})
                }else{
                    res.send({code:405,msg:'注册失败'})
                }
            })
        }
    })
})
//导出路由器
module.exports=router;
