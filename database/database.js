const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('FORTUNE', 'root', 'D9LIEy3MMuXbVcohBJ.!', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})