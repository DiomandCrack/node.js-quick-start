const { exec } = require('child_process')

const start = (response) => {
    console.log("Request handler 'start' was called")

    exec('find /',{
        timeout:5000,
        maxBuffer: 20000*1024
    },(error, sdtout,sdterr) => {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(sdtout);
        response.end();
    });
}

const upload = (response) => {
    console.log("Request handler 'upload' was called");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write('Hello Upload');
    response.end();
}

exports.start = start;
exports.upload = upload;