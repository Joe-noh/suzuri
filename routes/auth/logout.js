export function get(req, res, next) {
  res.set('Cache-Control', 'max-age=0, no-store, must-revalidate');

  req.session.destroy(() => {
    res.redirect("/");
  });
};
