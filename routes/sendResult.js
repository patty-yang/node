const getErr = (error = '', errCode = 500) => {
  return {
    code: errCode,
    msg: error
  }
}

const getResult = (result) => {
  return {
    code: 0,
    msg: '',
    data: result
  }
}

module.exports = {
  getErr,
  getResult
}
