export async function post(req, res, next) {
  res.set('Cache-Control', 'max-age=0, no-store, must-revalidate')

  try {
    const user = null //await User.findById(req.session.userId);

    if (user) {
      res.json({ user: userJson(user) });
    } else {
      res.status(404).json({});
    }
  } catch (e) {
    console.log(e);
  }
};

function userJson(user) {
  return {
    name: user.name,
    avatarUrl: user.avatarUrl,
  };
};
