const express = require('express')
const multer = require('multer')
const path = require('path')
const result = require('../sendResult')
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadedFile/')
  },
  filename: function (req, file, cb) {
    // 时间戳-6位随机字符.文件后缀
    const timeStamp = Date.now()
    const randomStr = Math.random().toString(36).slice(-6)
    const ext = path.extname(file.originalname)
    const filename = `${timeStamp}-${randomStr}${ext}`
    cb(null, filename)
  }
})

const upload = multer({
  storage
})

router.post('/', upload.single('file'), (req, res) => {
  if (req.file) {
    return res.send(
      result.getResult({ message: '文件上传成功', file: req.file })
    )
  } else {
    return res.send(result.getErr('img field is required'))
  }
})

module.exports = router
