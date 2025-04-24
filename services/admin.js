const md5 = require('md5')
const Admin = require('../models/admin')

const getAdminList = async ({ page, pageSize }) => {
  const offset = (page - 1) * pageSize
  const limit = +pageSize

  const result = await Admin.findAndCountAll({
    attributes: ['id', 'loginId'],
    offset,
    limit
  })

  return {
    total: result.count,
    list: result.rows.map((item) => item.toJSON())
  }
}

const createAdmin = async (data) => {
  data.loginPwd = md5(data.loginPwd)
  const instance = await Admin.create(data)

  return instance.toJSON()
}

const deleteAdmin = async (adminId) => {
  return await Admin.destroy({
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

const getAdminById = async (id) => {
  const result = await Admin.findOne({
    where: {
      id
    }
  })
  if (result) {
    return result.toJSON()
  }
  return null
}

module.exports = {
  getAdminList,
  getAdminById,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  login
}
