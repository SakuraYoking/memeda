const express=require("express");
const router=express.Router();
const pool=require("../pool");
//获取购物车数据
router.get('/getCart',(req,res)=>{
    var uid = req.session.uid
    if(!uid){
        res.send({code:-1,msg:'未登录'})
    }else{
        // var sql='select '
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.send({code:1,msg:'查询成功',data:result})
        })
        res.send({code:1,msg:'已登录'})
    }
})
module.exports=router;