const express = require('express')
const app = express()

const router = express.Router()

const list = [
  {
    a: 1
  },
  {
    a: 2
  }
]

const obj = {
  a: 1
}
router.get('/test', (req, res) => {
  // res.statusCode = 400
  res.send(obj)
  // res.send({
  //   code: 200,
  //   msg: 'success',
  //   data
  // })
})

router.post('/test', (req, res) => {
  res.send(list)
})

app.use(router)

app.listen(5008, () => {
  console.log('server is running at http://localhost:5008')
})
