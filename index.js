// require('./models/relation')
// require('./mockjs/classes')
// require('./mockjs/student')

// const adminService = require('./services/admin')

// adminService.createAdmin({
//   loginId: '1',
//   loginName: 'admin',
//   loginPwd: '123123'
// })

// const result = adminService.login('1', '123123')
// console.log(result)

const express = require('express')

const app = express()

app.get('/api/admin/login', (req, res) => {
  const { loginId, loginPwd } = req.query
  console.log(loginId, loginPwd)
})

app.listen(9527, () => {
  console.log('server is running at http://localhost:9527')
})
