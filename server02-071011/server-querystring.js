const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
    console.log(req.url);
    let getData = {};
    if(req.url.indexOf('?')!=-1){
        /*var arr = req.url.split('?')[1].split('&');
        for(let i=0;i<arr.length;i++){
            var arr2 = arr[i].split('=');
            console.log(arr2);
            getData[arr2[0]]=arr2[1];
        }*/
        let arr = req.url.split('?');
        let url = arr[0];
        getData = querystring.parse(arr[1]);
    }
    
    res.write(JSON.stringify(getData));
    res.end();
}).listen(3000,function(){
    console.log('server is run in 3000');
})