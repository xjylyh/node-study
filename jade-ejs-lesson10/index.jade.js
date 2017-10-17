const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./view/view.jade',{pretty:true});

fs.writeFile('./view/v.html',str,function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('写入成功');
})