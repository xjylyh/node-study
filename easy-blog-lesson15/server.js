const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');

var server = express();
var fileObj = multer({dest:'./files/'});
var arr = [];
server.listen(3000,function(){
    console.log('server is run in 3000');
})
for(let i=0;i<10000;i++){
    arr.push('keys_'+Math.random());
}
server.use(express.static('./views'));
server.use(bodyParser.urlencoded({extended:false}));
server.use(cookieParser("forjiyao"));
server.use(cookieSession({name:'session-for-jiyao',keys:arr,maxAge:20*60*1000}));
server.use(fileObj.any());

//处理模版文件
server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);

//用户请求
server.use('/login.html',(req,res)=>{
    res.render('login.ejs');
})