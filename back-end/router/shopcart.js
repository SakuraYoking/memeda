const express=require("express");
const router=express.Router();
const pool=require("../pool");
// 商品详情页
router.get("/",(req,res)=>{
    var pid=req.query.pid;
    console.log(pid);
    var sql=`SELECT * FROM memeda_shopcart WHERE pid=?`;
    pool.query(sql,[pid],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
             res.send(result);
        }
    })
})

module.exports=router;