import dotenv from  'dotenv'

import sapper from 'sapper';
import { manifest } from '../manifest/server.js';

import express from 'express';
import sirv from 'sirv';
import session from 'express-session';
import proxy from 'express-http-proxy';
import redis from 'connect-redis';

import cacheControl from './middleware/cache-control';
import apiRoute from './routes/api';

dotenv.load();

const app = express();
const RedisStore = redis(session);

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

app.set('port', port)

app.use(cacheControl)

app.set('trust proxy', true)
app.use(session({
  name: "sid",
  secret: process.env.SECRET_KEY_BASE,
  store: new RedisStore({
    url: process.env.REDIS_URL,
  }),
  resave: false,
  saveUninitialized: true,
  proxy: true,
  cookie: {
    path: "/",
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  },
}));

app.all('/api/*', apiRoute);

app.use(sirv('assets'));
app.use(sapper({ manifest }));

app.listen(port, host)
console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
