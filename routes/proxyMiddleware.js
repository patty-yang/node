const {
  createProxyMiddleware,
  responseInterceptor
} = require('http-proxy-middleware')

const apiProxy = createProxyMiddleware({
  target: 'http://127.0.0.1:5008',
  pathRewrite: { '^/api': '' },
  selfHandleResponse: true,
  on: {
    proxyRes: responseInterceptor(async (responseBuffer, proxyRes, req) => {
      // req.path 可以对单独接口进行处理
      if (proxyRes.headers['content-type'].includes('application/json')) {
        let data = JSON.parse(responseBuffer.toString('utf8'))

        if (!data.hasOwnProperty('data')) {
          const response = {
            code: 200,
            msg: 'success',
            data
          }
          return JSON.stringify(response)
        }
      }

      return responseBuffer
    })
  }
})

module.exports = {
  apiProxy
}
