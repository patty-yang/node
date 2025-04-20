const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('myschooldb', 'root', 'validate_password', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
