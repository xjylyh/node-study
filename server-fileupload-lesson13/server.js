const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
const jade = require('jade');
const ejs = require('ejs');

var server = express();

server.listen(3000,function(){
    console.log('server is run in 3000');
})
var arr = [];
for(var i=0;i<10000;i++){
    arr.push("keys_"+Math.random());
}
server.use(express.static('./views'));
server.use(bodyParser.urlencoded({extended:false}));
server.use(cookieParser('masterjiyao'));
server.use(cookieSession({keys:arr}))

