const server = require('./server');

const router = require('./router');

const requestHandlers = require('./requestHandlers');

const handle = {}

//地址分配给路由
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route,handle);