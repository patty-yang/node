const express = require('express')
const router = express.Router()
const path = require('path')
const sendMsg = require('../sendResult')

router.get('/:filename', async (req, res) => {
  const { filename } = req.params

  const absPath = path.resolve(__dirname, '../../uploadedFile', filename)
  res.download(absPath, filename)
})

module.exports = router
