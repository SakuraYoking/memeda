const express = require('express')
const pool = require('../pool.js')
const router = express.Router();

router.get('/list',(req,res)=>{
    var sql = "SELECT * FROM dj_product where lid";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,mag:"查询成功",data:result})
    })
})

module.exports = router;