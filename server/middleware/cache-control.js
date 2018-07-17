module.exports = function(req, res, next) {
  res.set('Cache-Control', cacheControl(req))

  next()
}

function cacheControl(req) {
  switch(req.path) {
    case '/':
      return `max-age=${3600 * 3}`
    case '/auth/callback':
      return 'no-cache, no-store, must-revalidate'
    default:
      return `max-age=${3600 * 24 * 365}`
  }
}
