const { Sequelize, DataTypes } = require('sequelize')

const { sequelize } = require('../database/database')
module.exports.User = sequelize.define('User', {
  // id
  id: {
    allowNull: false,
    unique: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  // first name
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 30,
      min: 1,
    }
  },
  // second name
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 30,
      min: 1,
    }
  },
  // balance
  balance: {
    type: DataTypes.INTEGER,
    defaultValue: 900,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
})

this.User.sync({ force: true })



