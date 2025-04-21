const Admin = require('../models/admin')

export const createAdmin = async (data) => {
  const instance = Admin.create(data)
  return instance.toJSON()
}

export const deleteAdmin = (adminId) => {
  Admin.destroy({
    where: {
      id: adminId
    }
  })
}

export const updateAdmin = (adminObj) => {
  const { id } = adminObj
  Admin.update(adminObj, {
    where: {
      id
    }
  })
}
