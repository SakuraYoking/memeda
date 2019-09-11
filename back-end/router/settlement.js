const express=require("express");
const router=express.Router();
const pool=require("../pool");

//插入购物车数据
router.get('/addCart',(req,res)=>{
    var uid = req.session.uid
    if(!uid){
        res.send({code:-1,msg:'未登录'})
        return;
    }
    // 查询是否买过这个商品
    var pid = req.query.pid;
    var sql =`select id from settlement where uid=? and pid=?`;
    pool.query(sql,[uid,pid],(err,result)=>{
        if(result.length>0){
            res.send({code:-2,msg:'购物车中已有该数据'})
        }else{
            var sql="select title,pic1,price from memeda_shopcart where pid=?";
            pool.query(sql,[pid],(err,result)=>{
                if(err) throw err;
                var title=result[0].title;
                var price=result[0].price;
                var pic=result[0].pic1;
                var sql="insert into settlement(uid,pid,title,price,pic,count) values(?,?,?,?,?,1)";
                pool.query(sql,[uid,pid,title,price,pic],(err,result)=>{
                    if(err) throw err;
                    res.send({code:1,msg:"插入成功"})
                })
            })
        }
    })
})
//获取购物车数据
router.get('/getCart',(req,res)=>{
    var uid = req.session.uid
    if(!uid){
        res.send({code:-1,msg:'未登录'})
        return;
    }
    var sql="select title,price,pic,count,pid from settlement where uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:'查询成功',data:result})
    })
})
//删除购物车数据
router.get('/delete',(req,res)=>{
    var uid=req.session.uid
    var pid=req.query.pid
    if(!uid){
        res.send({code:-1,msg:'未登录'})
        return;
    }
    var sql="delete from settlement where pid=?"
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:'查询成功',data:result})
    })
})
module.exports=router;