const svgCaptcha = require('svg-captcha')
const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  console.log(req.session)

  // const captcha = svgCaptcha.create()
  const captcha = svgCaptcha.createMathExpr({
    ignoreChars: 'iIl1Oo0',
    noise: 3,
    color: true
  })

  res.type('svg')
  res.status(200).send(captcha.data)
})
module.exports = router
