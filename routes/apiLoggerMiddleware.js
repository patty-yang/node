const { apiLogger } = require('../logger.js')
const log4js = require('log4js')

module.exports = log4js.connectLogger(apiLogger, {
  level: 'auto'
})
