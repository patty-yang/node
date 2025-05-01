const express = require('express')
const cookieParser = require('cookie-parser')
const { apiProxy } = require('./proxyMiddleware')

const app = express()

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cookieParser('encrypt'))
app.use(require('./apiLoggerMiddleware'))

app.use(require('./authMiddleware'))

app.use('/getCaptcha', require('./api/captcha'))
app.use('/api/admin', require('./api/admin'))
app.use('/api/upload', require('./api/upload'))
app.use('/api/download', require('./api/download'))
app.use(apiProxy)
app.use(require('./errorMiddleware'))

app.listen(9527, () => {
  console.log('server is running at http://localhost:9527')
})
