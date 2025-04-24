const getMsg = require('./sendResult')
// 处理错误的中间件
module.exports = (err, req, res, next) => {
  if (err) {
    res.send(getMsg.getErr(err))
  } else {
    next()
  }
}
