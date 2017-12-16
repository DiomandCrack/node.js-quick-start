const  http = require('http');

function onRequest(requset, response) {
    console.log('Request receuved');
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.")