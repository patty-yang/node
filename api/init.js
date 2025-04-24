const express = require('express')
const AdminService = require('../services/admin')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.get('/api/test', (req, res, next) => {
//   next(new Error('error'))
//   // next()
// })

// app.get('/api/test', (req, res, next) => {
//   res.send({
//     code: 200,
//     msg: 'success'
//   })
// })

app.post('/api/admin', async (req, res, next) => {
  await AdminService.createAdmin(req.body)

  res.send({
    code: 200,
    msg: 'success'
  })
})
app.use(require('./errorMiddleware'))

app.listen(9527, () => {
  console.log('server is running at http://localhost:9527')
})
