module.exports = function(req, res, next) {
  res.set('Cache-Control', cacheControl(req))

  next()
}

function cacheControl(req) {
  const path = req.path

  if (path === "/") {
    return `max-age=${3600 * 3}`
  } else if(noCache(path)) {
    return 'no-cache, no-store, must-revalidate'
  } else {
    return `max-age=${3600 * 24 * 365}`
  }
}

function noCache(path) {
  return (
    path.startsWith("/api") ||
    path.startsWith("/auth") ||
    path.startsWith("/_nuxt")
  )
}
