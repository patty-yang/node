const express = require('express')

const app = express()

app.get('/api/test', (req, res, next) => {
  next(new Error('error'))
  // next()
})

app.get('/api/test', (req, res, next) => {
  res.send({
    code: 200,
    msg: 'success'
  })
})

app.use(require('./errorMiddleware'))

app.listen(9527, () => {
  console.log('server is running at http://localhost:9527')
})
