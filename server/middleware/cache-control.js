module.exports = function(req, res, next) {
  res.set('Cache-Control', cacheControl(req))

  next()
}

function cacheControl(req) {
  const path = req.path

  if (path === "/") {
    return `max-age=${3600 * 3}`
  } else {
    return `max-age=${3600 * 24 * 365}`
  }
}
