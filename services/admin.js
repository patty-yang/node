const Admin = require('../models/admin')

const createAdmin = async (data) => {
  const instance = Admin.create(data)
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
  const { id } = adminObj
  Admin.update(adminObj, {
    where: {
      id
    }
  })
}

const login = async function (loginId, loginPwd) {
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd
    }
  })
  if (result?.loginId === loginId && result?.loginPwd === loginPwd) {
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
