const http = require('http');
const url = require('url');

const start = () => {

    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname;
        console.log('Requset for'+pathname+'received')
        response.writeHead(200,{
            "Content-Type":"text/plain"
        });
        response.write('Hello World')
    
        Response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started")
}

exports.start