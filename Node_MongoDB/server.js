const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

/** ---- GET 요청처리 서버 ----
 * app.get('경로',  function(요청, 응답){
 *  응답.send('pet 쇼핑 사이트 입니다.')
 * }); 
*/
app.get('/pet',  function(req, res){
    res.send('pet 쇼핑 사이트 입니다.')
});

app.get('/',  function(req, res){
    res.sendFile(__dirname + '/index.html');
});