const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/userdb.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const handler = server.listen(8000, () => {
  console.log('JSON Server is running');
});

module.exports = { handler };
