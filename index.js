var express = require('express');
var app = express();

console.log('abcdef');

app.listen(9000,function(){
    console.log('已启动,http://localhost:9000')
})