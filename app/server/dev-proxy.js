const fs = require('fs');
const path = require('path');
const httpProxy = require('http-proxy');

httpProxy.createServer({
  ssl: {
    key: fs.readFileSync(path.resolve(__dirname, 'cert/localhost-key.pem'), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert/localhost.pem'), 'utf8'),
  },
  target: {
    host: 'localhost',
    port: 3001
  },
  secure: false,
}).listen(3000);
