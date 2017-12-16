const exec = require('child_process').exec;

const start = () => {
    console.log("Request handler 'start' was called")
    var content = 'empty';

    exec('ls -lah',(error,stdout,stderr) => {
        console.log(`stdout: ${stdout}`);
        content = stdout;
        console.log(content);
    })

    return content;
}

function upload() {
    console.log("Request handler 'upload' was called")
    return 'Hello Upload'
}

exports.start = start;
exports.upload = upload;