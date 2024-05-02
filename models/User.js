const db = require('../db/connection')
const DataTypes = require('sequelize')


const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    isUnique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});


module.exports = User;