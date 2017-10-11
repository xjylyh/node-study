const http = require('http');

var server = http.createServer(function(req,res){
    switch(req.url){
        case '/a.html':
        res.write('a.html');
        break;
        case '/b.html':
        res.write('b.html');
        break;
        case '/c.html':
        res.write('c.html');
        break;
        default:
        res.write('404');
        break;
    }
    res.end();
})


server.listen('3210',function(){
    console.log('server is run in localhost:3210');
})