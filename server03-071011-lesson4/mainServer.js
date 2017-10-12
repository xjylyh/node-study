const http = require('http');//服务器模块
const fs = require('fs');//文件操作模块
const querystring = require('querystring');//querystring可以解析类似a=1&b=2...这类数据转为json
const urlLib = require('url');//url模块可以解析url返回一个url对象


let server = http.createServer(function(req,res){
    //GET
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    const getdata = obj.query;
    
    //post
    var str = '';
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
        const postdata = querystring.parse(str);
         fileName = './txt'+url;
            fs.readFile(fileName,function(err,data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data.toString());
                }
                res.end();
            })
            console.log(getdata,postdata,url);
    })
    //file
    
    
})

server.listen(3001,function(){
    console.log('server is run in 3001');
})