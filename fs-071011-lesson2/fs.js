const fs = require('fs');

//readFile(文件名,callback)
fs.readFile('aa.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

