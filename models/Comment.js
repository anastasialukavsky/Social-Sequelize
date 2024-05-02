const db = require('../db/connection');
const DataTypes = require('sequelize');

const Comment = db.define('Comment', {
  body: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
});


module.exports = Comment;
