const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('helloWorld')
});

app.listen(8080, ()=> console.log('server is running!! '));