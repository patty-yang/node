// 处理错误的中间件
module.exports = (err, req, res, next) => {
  if (err) {
    res.status(500).send({
      code: 500,
      msg: err instanceof Error ? err.message : err
    })
  } else {
    next()
  }
}
