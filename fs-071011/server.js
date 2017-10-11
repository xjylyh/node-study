const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var file_name = './txt'+req.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write(err.toString());//注意这里的toString,不加会报错（我抱错了= =），typeerror：First argument must be a string or Buffer  意思是说第一个参数应该是一个字符串或者二进制数据

        }else{
            res.write(data.toString());//同上
        }
        res.end();
    })
})


server.listen(3000,function(){
    console.log('server is run in 3000');
})