const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');//用来处理（前端form：enctype="multipart/form-data" 类型）文件上传
//使用注意：需要创建接收文件的file对象，然后dest指定文件存储的目录。具体可去npmjs.com查看文档
const fs = require('fs');
const pathLib = require('path');

var server = express();
var fileObj = multer({dest:'./files/'});//文件对象
server.listen(3000,function(){
    console.log('server is run in 3000');
})

server.use(bodyParser.urlencoded({extended:false}));//用来处理（前端form：enctype="application/x-www-form-urlencoded" 类型），按我的理解。。意思就是只处理静态数据
server.use(fileObj.any());//.single()

server.use('/',function(req,res){
    console.log(req.files);
    var newName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;//path模块的parse方法可以解析路径和文件名
    fs.rename(req.files[0].path,newName,function(err){//fs.rename()如同字面上一样，给文件重命名
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
        res.end();
    });
})