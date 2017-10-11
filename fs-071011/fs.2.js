const fs = require('fs');

//writeFile(文件名,内容,callback)
fs.writeFile('aa.txt','bbbbbbbbbbbbbb',function(err){
    if(err){
        console.log(err);
    }
})

