const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
 'test', //database  name
 'root', // database username
 '', // database password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 module.exports = sequelize;

//  const User = sequelize.define("users", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//     }
//  });
 
//  sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });