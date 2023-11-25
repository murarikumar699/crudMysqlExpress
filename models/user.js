const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db")

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'User' // We need to choose the model name
});

module.exports = User;