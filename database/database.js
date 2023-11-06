const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('FORTUNE', 'root', 'D9LIEy3MMuXbVcohBJ.!', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
})