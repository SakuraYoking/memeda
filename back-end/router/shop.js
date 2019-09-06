// const express=require("express");
// const router=express.Router();
// const pool=require("../pool");
// //商品列表
// router.get("/",(req,res)=>{
//     var sql=`SELECT * FROM shop_pic WHERE list_uid`;
//     pool.query(sql,[],(err,result)=>{
//         if(err){
//             res.send(err);
//             console.log(err);
//         }else{
//              res.send(result);
//         }
//     })
// })