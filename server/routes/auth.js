const {Router} = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const router = Router()

router.use(bodyParser.json())

router.post('/login', async (req, res, next) => {
  const code = req.body.code
  
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('redirect_uri', process.env.SUZURI_REDIRECT_URI)
  params.append('client_id', process.env.SUZURI_CLIENT_ID)
  params.append('client_secret', process.env.SUZURI_CLIENT_SECRET)

  try {
    const response = await axios.post('https://suzuri.jp/oauth/token', params)
    const accessToken = response.data.access_token
    
    res.json({ user: { token: accessToken } })
  } catch (e) {
    console.log(e)
    res.status(401).json({ error: e.response.data })
  }
})

module.exports = router
