const express = require('express');

var server = express();
server.listen(3000,function(){
    console.log('server is run in 3000');
})
//user_router
var user_router = express.Router();
server.use('/user',user_router);

user_router.use('/a.html',function(req,res){
    res.send('aaaaaa');
    res.end();
})
user_router.use('/b.html',function(req,res){
    res.send('bbbbb');
    res.end();
})

//pass_router
var pass_router = express.Router();
server.use('/pass',pass_router);
pass_router.use('/password',function(req,res){
    res.send('password11111');
    res.end();
})
pass_router.use('/passname',function(req,res){
    res.send('password22222');
    res.end();
})
