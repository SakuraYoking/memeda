const express=require("express");
const router=express.Router();
const pool=require("../pool");
//获取购物车数据
router.get('/getCart',(req,res)=>{
    var uid = req.session.uid
    if(!uid){
        res.send({code:-1,msg:'未登录'})
    }
    var pid=req.query.pid;
    var price=req.query.price;
    var title=req.query.title;
    var pic=req.query.pic;
    var count=req.query.count;
    // 查询是否买过这个商品
    var sql =`select id from settlement where uid=? and pid=?`;
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err)throw err;
        //没有购买过此商品
        if(result.length==0){
            sql=`INSERT INTO settlement VALUES (null,${pid},'${pic}','${title}',${price},${count})`
        }else{
            sql=`UPDATE settlement SET count=count+1 where uid=${uid} AND pid=${pid}`
        }
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            res.send({code,msg:"添加成功"})
        })
    })
})
module.exports=router;