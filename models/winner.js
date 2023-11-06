const { Sequelize, DataTypes } = require('sequelize')

const { sequelize } = require('../database/database')
module.exports.Winner = sequelize.define('Winner', {
  // id
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  // winner_id
  winner_id: {
    allowNull: false,
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
  // photo 
  photo: {
    allowNull: false,
    type: DataTypes.STRING,
  },  
  // win
  win: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  jackpot: {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
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

this.Winner.sync({ force: true })