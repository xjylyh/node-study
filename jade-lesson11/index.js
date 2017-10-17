const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./view/main.jade',{pretty:true,b:25,c:100,contents:'<h2>mmmmmmm</h2><div>少时诵诗书</div>'});

fs.writeFile('./view/index.html',str,function(err){
    if(err){
        console.log('出错了:'+err);
        return false;
    }
})