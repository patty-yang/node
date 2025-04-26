const { pathToRegexp } = require('path-to-regexp')
// 用来解析 token
const needTokenApi = [
  {
    path: '/api/admin',
    method: 'GET'
  },
  {
    path: '/api/admin',
    method: 'PUT'
  }
]

module.exports = (req, res, next) => {
  const { method, path } = req
  const isNeedToken = needTokenApi.filter((api) => {
    const reg = pathToRegexp('/api/admin/:id')
    return api.method === method && reg.test(path)
  })
  if (isNeedToken.length === 0) {
    next()
    return
  }
  const token = req.headers['authorization'] || req.cookies.token
  if (!token) {
    return res.status(401).send({
      code: 401,
      msg: 'Unauthorized'
    })
  }
  next()
}
