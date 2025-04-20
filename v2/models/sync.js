// 同步所有模型
require('./admin')
require('./book')
require('./class')
require('./student')
const sequelize = require('./db')

sequelize.sync({ alter: true }).then(() => {
  console.log('所有模型同步完成')
})
