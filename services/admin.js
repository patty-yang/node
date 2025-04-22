const md5 = require('md5')
const Admin = require('../models/admin')

const createAdmin = async (data) => {
  data.loginPwd = md5(data.loginPwd)
  const instance = await Admin.create(data)

  return instance.toJSON()
}

const deleteAdmin = (adminId) => {
  Admin.destroy({
    where: {
      id: adminId
    }
  })
}

const updateAdmin = (adminObj) => {
  const { id, loginPwd } = adminObj
  if (loginPwd) {
    adminObj.loginPwd = md5(loginPwd)
  }
  Admin.update(adminObj, {
    where: {
      id
    }
  })
}

const login = async function (loginId, loginPwd) {
  loginPwd = md5(loginPwd)
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd
    }
  })
  if (result?.loginId === loginId) {
    return result.toJSON()
  }
  return null
}

module.exports = {
  createAdmin,
  deleteAdmin,
  updateAdmin,
  login
}
