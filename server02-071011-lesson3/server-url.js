const http = require('http');
const urlLib = require('url');

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
        let obj = urlLib.parse(req.url,true);
        let url = obj.pathname;
        getData = obj.query;
        console.log(url,getData);
    }
    
    res.write(JSON.stringify(getData));
    res.end();
}).listen(3000,function(){
    console.log('server is run in 3000');
})