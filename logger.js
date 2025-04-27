const log4js = require('log4js')
const path = require('path')

function getCommonAppended(pathSeg) {
  return {
    type: 'dateFile',
    filename: path.resolve(__dirname, 'logs', pathSeg, 'logging.log'),
    maxLogSize: 1024 * 1024, //配置文件的最大字节数
    keepFileExt: true,
    numBackups: 3,
    layout: {
      type: 'pattern',
      pattern: '%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
    }
  }
}

log4js.configure({
  appenders: {
    sql: getCommonAppended('sql'),
    default: {
      type: 'stdout'
    },
    api: getCommonAppended('api')
  },
  categories: {
    sql: {
      appenders: ['sql'],
      level: 'all'
    },
    default: {
      appenders: ['default'],
      level: 'all'
    },
    api: {
      appenders: ['api'],
      level: 'all'
    }
  }
})

process.on('exit', () => {
  log4js.shutdown()
})

exports.sqlLogger = log4js.getLogger('sql')
exports.logger = log4js.getLogger()
exports.apiLogger = log4js.getLogger('api')
