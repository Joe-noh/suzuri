const {Router} = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const { User } = require('../models')

const router = Router()

router.use(bodyParser.json())

router.get('/callback', async (req, res, next) => {
  res.set('Cache-Control', 'max-age=0, no-store, must-revalidate')

  const code = req.query.code

  try {
    const token = await User.exchangeTokenWithCode(code)
    const user = await User.registerOrLogin(token)

    req.session.regenerate(() => {
      req.session.userId = user.id
      res.redirect("/")
    })
  } catch (e) {
    console.log(e);
    res.status(401).json({ error: e.response.data })
  }
})

router.get('/user', async (req, res, next) => {
  res.set('Cache-Control', 'max-age=0, no-store, must-revalidate')

  const userId = req.session.userId

  try {
    const user = await User.findById(userId)

    if (user) {
      res.json({
        user: {
          name: user.name,
          avatarUrl: user.avatarUrl,
        }
      })
    } else {
      res.status(404).json({})
    }
  } catch (e) {
    console.log(e);
  }
})

module.exports = router
