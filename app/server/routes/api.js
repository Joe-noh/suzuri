const proxy = require('express-http-proxy')

const router = proxy('suzuri.jp', {
  https: true,
  proxyReqOptDecorator: async (proxyReqOpts, srcReq) => {
    const token = authToken()

    proxyReqOpts.headers['Authorization'] = `Bearer ${token}`
    return proxyReqOpts
  },
  userResHeaderDecorator(headers) {
    return Object.assign(headers, {
      'Cache-Control': 'max-age=0, no-store, must-revalidate',
    })
  },
  filter: (req, res) => {
    return req.method === 'GET' && req.url.startsWith('/api/v1/');
  },
})

function authToken(user) {
  return process.env.SUZURI_API_KEY
}

module.exports = router
