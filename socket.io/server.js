const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
//引入socket.io 模块并绑定到服务器

app.use('/',express.static(__dirname+'/www'));
server.listen(80);

//socket
io.on('connection',(socket)=>{
    //接受并处理客户端发送的foo事件
    socket.on('foo',(data)=>{
        //将消息输出到控制台
        console.log(data)
    })
})
