const getMsg = require('./sendResult')
const { errorsLogger } = require('../logger')
// 处理错误的中间件
module.exports = (err, req, res, next) => {
  if (err) {
    errorsLogger.debug(err)
    res.send(getMsg.getErr(err))
  } else {
    next()
  }
}
