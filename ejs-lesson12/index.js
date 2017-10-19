const ejs = require('ejs');

ejs.renderFile('./views/index.ejs',{name:'jiyao',json:{arr:[
        {user:'jiyao',pass:'100425'},
        {user:'zhangsan',pass:'123456'},
        {user:'lisi',pass:'654321'}
    ]},type:'admin'},function(err,data){
    if(err){
        console.log(err);
        return false;
    }else{
        console.log(data);
    }
})