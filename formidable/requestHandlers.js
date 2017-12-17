const queryString = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

const start = (response,request) => {
    console.log("Request handler 'start' was called");

    const body = `
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                <body>
                    <form action="/upload" method="post" enctype = "multipart/form-data">
                        <input type='file' name='upload' multiple='multiple'/>
                        <input type="submit" value="upload file" />
                    </form>
                </body>
                </html>
    `;

    response.writeHead(200,{
        "Content-Type":"text/html;charsst=utf-8"
    });
    response.write(body);
    response.end();
}
const upload = (response,request) => {
    console.log("Request handler 'upload' was called");

    const form = new formidable.IncomingForm();
    form.uploadDir = 'tmp';
    console.log('about to parse');
    form.parse(request,(error,fields,files) => {
        console.log("paring done");
        fs.renameSync(files.upload.path, './' + form.uploadDir + '/test.png');
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("receive image:<br />");
        response.write("<img src='/show'>");
        response.end();
    })
}

// function upload(response, request){
//     var form = new formidable.IncomingForm();
//     form.uploadDir = "upload"; // project dir
//     form.parse(request, function(error, fields, files) {
//         fs.renameSync(files.upload.path, "./" + form.uploadDir + "/test.png");
//         response.writeHead(200, {"Content-Type": "text/html"});
//         console.log(files.upload.path);
//         response.write("<img src='/show' />");
//         response.end();
//      });}

const show = (response,request) => {
    console.log("Request handler 'show' was called");

    fs.readFile('./tmp/test.png','binary',(err,file) => {
        if(err){
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(err+'/n');
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/png"});
            response.write(file,'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;