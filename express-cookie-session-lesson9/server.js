const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

server.listen(3000,function(){
    console.log('server is run in 3000');
})

var arr = [];

for(let i=0;i<10000;i++){
    arr.push('keys'+Math.random());
}

server.use(cookieParser('skljzxlkjlasd'));
server.use(cookieSession({keys:arr}));

server.use('/a.html',function(req,res){
    res.cookie('lyh','sb',{
        path:'/a.html',
        maxAge:7*24*3600*1000,
        signed:true
    })
    res.send('ok');
    res.end();
})