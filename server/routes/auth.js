const {Router} = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const { User } = require('../models')

const router = Router()

router.use(bodyParser.json())

router.get('/callback', async (req, res, next) => {
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

module.exports = router
