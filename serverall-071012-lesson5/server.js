const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
var userJson = {};
var server = http.createServer(function(req,res){
    var str = '';
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
        var urlobj = urlLib.parse(req.url,true);//取得get的请求数据用url模块转为url对象
        var url = urlobj.pathname;//请求的url名字
        var GET = urlobj.query;//前端get请求提交到到后代的数据json
        var POST = querystring.parse(str);//前端post请求到后台的所有数据
        if(url=='/user'){//这里判断的意思是如果请求的时/user的话判断为请求接口，不然则判断为请求文件
            switch(GET["type"]){//取得请求接口的类型是注册（reg）还是登陆（login）
                case 'reg':
                console.log(GET,userJson);
                    if(userJson[GET.username]){//这里说一下如果直接返回string类型的数据前端只能用eval()解析，前端无法转成json，需要在服务端JSON.stringify('要返回的数据')，前端才好接收，而且要符合json规范
                        res.write(JSON.stringify({"r":"false","msg":"用户已存在"}));
                    }else{
                        userJson[GET.username] = GET.password;
                        res.write(JSON.stringify({"r":"true","msg":"注册成功"}));
                    }//这一个case是注册的业务逻辑，我们需要判断储存用户名密码的对象中是否存在请求发过来的username，如果存在则说明已经注册，如果不存在则说明可以注册。我们根据这两种情况返回不同的数据
                break;
                case 'login':
                console.log(GET,userJson);
                    if(userJson[GET.username]){
                        if(userJson[GET.username]==GET.password){
                            res.write(JSON.stringify({"r":"true","msg":"登陆成功"}))
                        }else{
                            res.write(JSON.stringify({"r":"false","msg":"密码错误"}))
                        }
                    }else{
                        res.write(JSON.stringify({"r":"false","msg":"用户名不存在"}))
                    }//这一个case是登陆的业务逻辑，我们先判断有没有这个用户，如果有则比较密码，如果密码也正确则允许登陆
                break;
                default:
                    res.write(JSON.stringify({"r":"false","msg":"未知错误（参数错误）"}))
                break;
            }
            res.end();
        }else{
            var file_name = './view'+url;
            fs.readFile(file_name,function(err,data){
                if(err){
                    console.log(err.toString());
                }else{
                    res.write(data.toString());
                }
                res.end();
            })
        }
    })
})

server.listen(3000,function(){
    console.log('server is run in 3000');
})