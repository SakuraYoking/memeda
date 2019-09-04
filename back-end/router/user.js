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

if(!sql.phone&&!sql.email){
    res.send({code:401,msg:'phone or email required'});
		return;
}else if(!sql.upwd){
    res.send({code:401,msg:'upwd required'});
    return;
}
pool.query('select * from memeda_user where (phone=? or email=?) and upwd=?',[sql.phone,sql.email,sql.upwd],function(err,result){
    if(err) throw err;
    console.log(result);
    //判断数据长度是否大于0
    if(result.length>0){
        res.send({code:200,msg:'登录成功'})
    }else{
        res.send({code:401,msg:'登录失败'})
    }
})
})

//注册
router.post('/reg',(req,res)=>{
    var sql=req.body
    var sql="select uid from memeda_user where email=? or phone=?"
    pool.query(sql,[sql.email,sql.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("该手机号或邮箱已存在")
        }else{
            //生成6位随机用户名user_name
            var arr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            var user_name="";
            for(var i=0;i<6;i++){
                //生成arr的随机下标
                var num=Math.floor(Math.random()*arr.length);
                user_name+=arr[num];
            }
            var sql;
            var reg=/\d{11}/;
            if(reg.test(uname)){
                sql="insert into memeda_user(phone,upwd,user_name) values(?,?,?)"
            }else{
                sql="insert into memeda_user(email,upwd,user_name) values(?,?,?)"
            }
            pool.query(sql,[uname,upwd,user_name],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send("注册成功")
                }else{
                    res.send("注册失败")
                }
            })
        }
    })
})
//导出路由器
module.exports=router;
