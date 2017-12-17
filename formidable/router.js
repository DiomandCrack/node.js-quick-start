const route = (handle,pathname,request,response) => {
    console.log("About to route a queste for"+ pathname);

    if(typeof handle[pathname]==='function'){
        handle[pathname](response,request);
    }else{
        console.log('No request for'+ pathname);
        request.writeHead(404,{
            "Content-Type":"text/plain"
        })
        request.write('404 Not Found');
        request.end();
    }
}

exports.route = route;