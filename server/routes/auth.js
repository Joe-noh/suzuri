const {Router} = require('express')

const router = Router()

router.post('/login', (req, res, next) => {
  res.json({ user: {} })
})

module.exports = router
