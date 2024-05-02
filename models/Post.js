const db = require('../db/connection');
const DataTypes = require('sequelize');


const Post = db.define('post', {
  title: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.TEXT
  },
  cratedAt: {
    type: DataTypes.DATEONLY
  }
});

module.exports = Post;
