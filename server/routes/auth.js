const {Router} = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const { User } = require('../models')

const router = Router()

router.use(bodyParser.json())

router.post('/login', async (req, res, next) => {
  const code = req.body.code

  const params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('redirect_uri', process.env.SUZURI_REDIRECT_URI)
  params.append('client_id', process.env.SUZURI_CLIENT_ID)
  params.append('client_secret', process.env.SUZURI_CLIENT_SECRET)

  try {
    const tokenResponse = await axios.post('https://suzuri.jp/oauth/token', params)
    const accessToken = tokenResponse.data.access_token

    const userResponse = await axios.get('https://suzuri.jp/api/v1/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const suzuriUser = userResponse.data.user

    await User.findOrCreate({
      where: { suzuriId: suzuriUser.id.toString() },
      defaults: {
        name: suzuriUser.name,
        avatarUrl: suzuriUser.avatarUrl,
        accessToken,
      }
    }).spread((user, isCreated) => {
      console.log(user)

      return res.json({
        name: user.name,
        avatarUrl: user.avatarUrl,
      })
    })
  } catch (e) {
    res.status(401).json({ error: e.response.data })
  }
})

module.exports = router
