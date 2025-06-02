const cors_proxy = require('cors-anywhere');

// Create CORS Anywhere server
const server = cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
});

module.exports = (req, res) => {
  server.emit('request', req, res);
};
