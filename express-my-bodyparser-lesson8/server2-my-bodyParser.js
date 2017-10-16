const express = require('express');
const bodyParser2 = require('./lib/my-bodyParser.js');

var server = express();

server.listen(3000,function(){
    console.log('server is run in 3000');
})

server.use(bodyParser2());

server.use('/',function(req,res){
    console.log(req.body);
})