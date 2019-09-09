const express=require("express");
const router=express.Router();
const pool=require("../pool");

//轮播图 
router.get("/",(req,res)=>{
    var sql=`SELECT * FROM memeda_carouse WHERE pid`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
             res.send(result);
        }
    })
})

//主页其他图片
router.get("/other",(req,res)=>{
    var sql=`SELECT * FROM index_pic WHERE pid`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
module.exports=router;