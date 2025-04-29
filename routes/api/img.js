const url = require('url')
const path = require('path')

module.exports = (req, res, next) => {
  let referer = req.headers.referer
  const host = req.headers.host
  const extname = path.extname(req.path)
  const whiteImg = ['.png', '.jpg', 'jpeg', 'gif']

  if (!whiteImg.includes(extname)) {
    next()
    return
  }

  if (referer) {
    referer = url.parse(url).host
  }

  if (referer && host !== referer) {
    res.status(401).end()
    return
  }
  next()
}
