const express = require('express')
const pool = require('../pool.js')
const router = express.Router();

router.get('/list',(req,res)=>{
    var sql = "SELECT uid,lid,title,subtitle,img FROM dj_product";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,mag:"查询成功",data:result})
    })
})

module.exports = router;