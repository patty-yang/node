const { match } = require('path-to-regexp')
const crypt = require('../utils/crypt')
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
  const needTokenApis = needTokenApi.filter((api) => {
    const reg = match(api.path)
    return api.method === req.method && reg(req.path)
  })
  if (needTokenApis.length === 0) {
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

  const userId = crypt.decrypt(token)
  req.userId = userId

  console.log('auth success')

  next()
}
