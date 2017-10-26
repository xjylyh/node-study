const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
const consolidate = require('consolidate');
const loginRouter = require('./login.router.js');
const listRouter = require('./list.router.js');
const contextRouter = require('./context.router.js')

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
server.set('views','./views/template/');
server.engine('html',consolidate.ejs);

//router
server.use('/login',loginRouter);
server.use('/list',listRouter);
server.use('/context',contextRouter);
/*SELECT name,SUM(price) FROM 表 GROUP BY name ORDER BY SUM(price) DESC*/
/*查询表中用户，以及购买所有商品的价格总和并合并而且按照降序排列*/



