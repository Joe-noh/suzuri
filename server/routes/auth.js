const {Router} = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const { User } = require('../models')

const router = Router()

router.use(bodyParser.json())

router.post('/login', async (req, res, next) => {
  const code = req.body.code

  try {
    const token = await User.exchangeTokenWithCode(code)
    const user = await User.registerOrLogin(token)

    return res.json({
      name: user.name,
      avatarUrl: user.avatarUrl,
    })
  } catch (e) {
    console.log(e);
    res.status(401).json({ error: e.response.data })
  }
})

module.exports = router
