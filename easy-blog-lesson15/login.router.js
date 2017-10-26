const express = require('express');
const router = express.Router();


//用户请求
router.use((req,res)=>{
    console.log('有人访问login');
    res.render('login.ejs');
})
module.exports = router;