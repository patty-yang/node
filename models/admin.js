const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const Admin = sequelize.define(
  'Admin',
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true
  }
)

// ;(async function (params) {
//   await Admin.sync({ alter: true })
//   console.log('admin init')
// })()
module.exports = Admin
