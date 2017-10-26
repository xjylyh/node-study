const express = require('express');
const router = express.Router();
const mysql = require('mysql');
//数据库连接池
const db = mysql.createPool({host:'localhost',user:'root',password:'100425',database:'blog'});

router.use((req,res,next)=>{
      //查询banner信息
    db.query('SELECT *FROM banner_msg',(err,data)=>{
        if(err){
            res.status(500).send('database error').end();
        }else{
            console.log(JSON.stringify(data));
            res.banners = data;
            next();
        }
    });
})

router.use((req,res,next)=>{
    //查询新闻列表
    db.query('SELECT ID,title,summary FROM article_table',(err,data)=>{
                if(err){
                    res.status(500).send('article error').end();
                }else{
                    res.news = data;
                    next();
                }
            })
})

router.use((req,res)=>{
    res.render('list.ejs',{banner:JSON.stringify(res.banners),article:JSON.stringify(res.news)});
})

module.exports = router;