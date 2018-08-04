export async function get(req, res, next) {
  res.set('Cache-Control', 'max-age=0, no-store, must-revalidate')

  const code = req.query.code

  try {
    // const token = await User.exchangeTokenWithCode(code)
    // const user = await User.registerOrLogin(token)

    req.session.regenerate(() => {
      // req.session.userId = user.id
      res.redirect("/")
    })
  } catch (e) {
    res.status(401).json({ error: e.response.data })
  }
};
