const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cookieParser('encrypt'))
app.use(cookieParser())
app.use(require('./authMiddleware'))
app.use('/api/admin', require('./api/admin'))

app.use(require('./errorMiddleware'))

app.listen(9527, () => {
  console.log('server is running at http://localhost:9527')
})
