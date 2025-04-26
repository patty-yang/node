// 对 headers 的 cookie 进行加密和解密
// 使用的是 aes-128-cbc 算法
const secret = Buffer.from('mm7h3ck87ugk9l4a')
const crypto = require('crypto')

// 随机向量，保证每次加密的结果不同 同时解密的时候保持和加密的一致
const iv = Buffer.from('jxkvxz97409u3m8c')

const encrypt = function (str) {
  const cry = crypto.createCipheriv('aes-128-cbc', secret, iv)
  let result = cry.update(str, 'utf-8', 'hex')
  result += cry.final('hex')
  return result
}

const decrypt = function (str) {
  const decry = crypto.createDecipheriv('aes-128-cbc', secret, iv)
  let result = decry.update(str, 'hex', 'utf-8')
  result += decry.final('utf-8')
  return result
}

module.exports = {
  encrypt,
  decrypt
}
