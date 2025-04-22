const { Sequelize } = require('sequelize')

const { sqlLogger } = require('../logger')
const sequelize = new Sequelize('myschooldb', 'root', 'validate_password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: (msg) => {
    sqlLogger.debug(msg)
  }
})

module.exports = sequelize
