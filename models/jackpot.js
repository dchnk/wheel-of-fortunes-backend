const { Sequelize, DataTypes } = require('sequelize')

const { sequelize } = require('../database/database')
module.exports.Jackpot = sequelize.define('Jackpot', {
  // id
  jackpot_id: {
    defaultValue: 1,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  current_jackpot: {
    defaultValue: 1000,
    type: DataTypes.BIGINT,
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

this.Jackpot.sync({ force: true })