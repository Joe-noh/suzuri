const axios = require('axios')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    suzuriId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    avatarUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    accessToken: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {})

  User.associate = (models) => {
    // associations can be defined here
  }

  User.exchangeTokenWithCode = async (code) => {
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('code', code)
    params.append('redirect_uri', process.env.SUZURI_REDIRECT_URI)
    params.append('client_id', process.env.SUZURI_CLIENT_ID)
    params.append('client_secret', process.env.SUZURI_CLIENT_SECRET)

    const res = await axios.post('https://suzuri.jp/oauth/token', params)
    return accessToken = res.data.access_token
  }

  User.registerOrLogin = async (token) => {
    const res = await axios.get('https://suzuri.jp/api/v1/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const suzuriUser = res.data.user

    return User.findOrCreate({
      where: {
        suzuriId: suzuriUser.id.toString(),
      },
      defaults: {
        name: suzuriUser.name,
        avatarUrl: suzuriUser.avatarUrl,
        accessToken,
      }
    }).spread((user, isCreated) => {
      return user
    })
  }

  return User
}
