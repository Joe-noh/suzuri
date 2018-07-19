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

  return User
}
