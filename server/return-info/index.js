const server = require('./server');
const route = require('./router');
const requestHandlers = require('./wrong-requestHandler');

const handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(route.route, handle);