const ejs = require('ejs');

ejs.renderFile('./view/view.ejs',{name:'jiyao'},function(err,data){
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
});