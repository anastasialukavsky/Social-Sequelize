const db = require('../db/connection');
const DataTypes = require('sequelize');

const Like = db.define('like', {
  reactionType: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATEONLY
  }
})
module.exports = Like;
