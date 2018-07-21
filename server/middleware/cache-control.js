module.exports = function(req, res, next) {
  if (process.env.NODE_ENV === "production") {
    res.set('Cache-Control', cacheControl(req))
  }

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
