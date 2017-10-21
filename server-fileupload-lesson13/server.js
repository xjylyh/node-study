const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
const consolidate = require('consolidate');

var server = express();
var fileObj = multer({dest:'./files/'});
server.listen(3000,function(){
    console.log('server is run in 3000');
})
var arr = [];
for(var i=0;i<10000;i++){
    arr.push("keys_"+Math.random());
}
//处理静态文件
server.use(express.static('./views'));
//处理普通post数据
server.use(bodyParser.urlencoded({extended:false}));
//处理post文件上传数据
server.use(fileObj.any());
//处理cookie，cookie根据签名生成
server.use(cookieParser('masterjiyao'));
//处理session，session名字、key、有效时间
server.use(cookieSession({name:'session-for-jiyao',keys:arr,maxAge:20*60*1000}));

//使用consolidate(统一; 把…合成一体，合并; 巩固，加强; 合计金额),来进行模版引擎的处理
//按我的理解。。这句话的意思也就是给用户呈现的是什么样的文件  （view engine  ==>  视图引擎）
server.set('view engine','html');
//规定模版文件目录
server.set('views','./views');
//按我的理解。。如果你要是想要输出html，就需要使用comsolidate整合的ejs
server.engine('html',consolidate.ejs);

server.use('/index',function(req,res){
    res.render('index.ejs',{name:'jiyaos'})
})

/*server.use('/',function(req,res){
    console.log(req.query,req.body,req.cookies,req.session)
})*/

