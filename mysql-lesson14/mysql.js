const mysql = require('mysql');

//1.链接
//createConnection(那台服务器，用户名，密码，库)
var db = mysql.createConnection({host:'localhost',port:'3306',user:'root',password:'100425',database:'20171023'})

//2.查询
//query(做什么,回调)//数据库操作为异步
//SQL=>Structured Query Language（结构化查询语言）
//4大查询语句--增删改查
//增-INSERT
//INSERT INTO 表名(字段列表) VALUES(值列表)
//ex: INSERT INTO `user_table`(`ID`,`username`,`password`) VALUES(0,'jiyao2','1004252');


//删-DELETE


//改-UPDATE


//查-SELECT
//SELECT 什么 FROM 表
//ex:SELECT * FROM `user_table`



/*
SQL标准写法：
1.关键字大写
2.库、表、字段名需要加上反单引号``
*/
db.query('SELECT * FROM `user_table`',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(JSON.stringify(data));
    }
});