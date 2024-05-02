const db = require('../db/connection');
const DataTypes = require('sequelize');

const Profile = db.define('Profile', {
  bio: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true, 
  },
});

module.exports = Profile;
