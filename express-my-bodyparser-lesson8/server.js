const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(3000,function(){
    console.log('server is run in 3000');
})

server.use(bodyParser.urlencoded({}));
server.use(express.static('./view'));
server.use('/',function(req,res){
    console.log(req.body);
})