const start = () => {
    console.log("Request handler 'start' was called");
}

const upload = () => {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;
//"把请求处理程序和路由模块连接起来,让路由'有路可寻'"
//不同的路由做不同的事情