const server = require('./router-server-updated');
const router = require('./router');

server.start(router.route)