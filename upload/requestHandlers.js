const queryString = require('querystring');

const start = (response,postData) => {
    console.log("Request handler 'start' was called")

    const body = `
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                <body>
                    <form action="/upload" method="post">
                        <textarea name="text" id="" cols="60" rows="20"></textarea>
                        <input type="submit" value="Submit text" />
                    </form>
                </body>
                </html>
    `;
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.write(body);
    response.end();
}

const upload = (response,postData) => {
    console.log("Request handle 'upload' was called")
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.write("You've sent"+queryString.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;