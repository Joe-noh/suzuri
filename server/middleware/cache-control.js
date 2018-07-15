module.exports = function(req, res, next) {
  const maxAge = calcMaxAge(req.path)

  res.set('Cache-Control', `max-age=${maxAge}`)

  next()
}

function calcMaxAge(path) {
  switch(path) {
    case '/':
      return 3600 * 3
    default:
      return 3600 * 24 * 365
  }
}
