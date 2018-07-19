require('dotenv').load()

const express = require('express')
const proxy = require('express-http-proxy')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const authRoute = require('./routes/auth')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use('/auth', authRoute)

  app.use(
    '/api',
    proxy('suzuri.jp', {
      https: true,
      proxyReqPathResolver: req => `/api${req.url}`,
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers['Authorization'] = `Bearer ${process.env.SUZURI_API_KEY}`
        return proxyReqOpts
      },
      filter: (req, res) => (req.method === 'GET'),
    }),
  )

  app.use(nuxt.render)

  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
