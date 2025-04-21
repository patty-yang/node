const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const ClassEs = sequelize.define(
  'Class',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    openDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true
  }
)

module.exports = ClassEs
