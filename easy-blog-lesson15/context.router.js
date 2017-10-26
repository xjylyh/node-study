const express = require('express');
const router = express.Router();
const mysql = require('mysql');
//数据库连接池
const db = mysql.createPool({host:'localhost',user:'root',password:'100425',database:'blog'});

router.use((req,res)=>{
    if(req.query.id){
        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                res.status(500).send('查询失败').end();
            }else{
                if(data.length==0){
                    res.status(404).send('您请求的文章找不到').end();
                }else{
                    var x = data;
                    x[0].content = x[0].content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                    res.render('context.ejs',{atcdata:JSON.stringify(x)});
                }
            }
        })
    }else{
        res.status(404).send('您请求的文章找不到').end();
    }
})

module.exports = router;