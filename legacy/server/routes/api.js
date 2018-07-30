const proxy = require('express-http-proxy')
const { User } = require("../models")

const router = proxy('suzuri.jp', {
  https: true,
  proxyReqPathResolver: req => `/api${req.url}`,
  proxyReqOptDecorator: async (proxyReqOpts, srcReq) => {
    const userId = srcReq.session.userId
    const user = await User.findById(userId)
    const token = authToken(user)

    proxyReqOpts.headers['Authorization'] = `Bearer ${token}`
    return proxyReqOpts
  },
  userResHeaderDecorator(headers) {
    return Object.assign(headers, {
      'Cache-Control': 'max-age=0, no-store, must-revalidate',
    })
  },
  filter: (req, res) => (req.method === 'GET'),
})

function authToken(user) {
  if (user) {
    return user.accessToken
  } else {
    return process.env.SUZURI_API_KEY
  }
}

module.exports = router
