require('dotenv').load()

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const proxy = require('express-http-proxy')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const cacheControl = require('./middleware/cache-control')
const authRoute = require('./routes/auth')
const apiRoute = require('./routes/api')

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

  app.use(cacheControl)

  app.use(session({
    name: "sid",
    secret: process.env.SECRET_KEY_BASE,
    store: new RedisStore({
      url: process.env.REDIS_URL,
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: "/",
      proxy: true,
      secure: !config.dev,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
  }))

  app.use('/auth', authRoute)
  app.use('/api', apiRoute)

  app.use(nuxt.render)

  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
