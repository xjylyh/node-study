const querystring = require('querystring');

module.exports = function(){
    return function(req,res,next){
        var str = '';
        req.on('data',function(data){
            str+=data;
        })
        req.on('end',function(){
            req.body = querystring.parse(str);
            next();
        })
    }
    
}

/*
1.在这里简单的模仿body-parser接收post参数
2.server.use()
没有写第一个参数是由于模块需要不同的接口访问不可固定，也就是说访问什么都可以使用模块处理
第二个是回调function也就是我定义的模块，这里除了request和response还多了一个next是由于express的链式操作需要next()方法来进行值传递，也就是我们赋值的req.body可以传递到下一个req中。详见server2-my-bodyParser.js
*/