const http = require('http');

var server = http.createServer(function(req,res){
    res.write('sm');
    res.end();
})


server.listen('3210',function(){
    console.log('server is run in localhost:3210');
})