const express = require('express');
const bodyparser = require('body-parser')

var server = express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyparser.urlencoded({ extended: false })
server.listen(3000,function(){
    console.log('server is run in 3000');
})

var user = {
    'jiyao':'100425',
    'zhangsan':'123456',
    'lisi':'654321'
}


//get 请求json可以直接去拿req.query
//post 请求则需要body-parser插件来处理或者自己req.on('data',function(data){ str+=data })解析
//中间件是一个很大的问题，需要学习
//use=》post & get都可以接受

server.use('/login',urlencodedParser,function(req,res){
    var query = req.body;
    console.log(query);
    if(user[query['user']]){
        if(user[query['user']]!=query['pass']){
            res.send(JSON.stringify({"r":"false","msg":"密码错误"}))
        }else{
            res.send(JSON.stringify({"r":"true","msg":"登陆成功"}))
        }
    }else{
        res.send(JSON.stringify({"r":"false","msg":"用户名不存在"}))
    }
    res.end();
})
server.use(express.static('./views'));
