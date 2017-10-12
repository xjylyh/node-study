const http = require('http');
const querystring = require('querystring');


http.createServer(function(req,res){
    let str = '';
    let i=0;
    req.on('data',function(data){
        str+=data;
    });
    req.on('end',function(){
        var subdata = querystring.parse(str);
        console.log(subdata);
    })
}).listen(3000,function(){
    console.log('server is run in 3000');
})