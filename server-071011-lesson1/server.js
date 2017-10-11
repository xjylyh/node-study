const http = require('http');

var server = http.createServer(function(request,response){
    console.log('some one init');
})


server.listen('3210',function(){
    console.log('server is run in localhost:3210');
})