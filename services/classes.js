const Classes = require('../models/class')

const createBook = async (data) => {
  const instance = Classes.create(data)
  return instance.toJSON()
}

const deleteBook = (classId) => {
  Classes.destroy({
    where: {
      id: classId
    }
  })
}

const updateAdmin = (data) => {
  const { id } = data
  Classes.update(data, {
    where: {
      id
    }
  })
}

module.exports = {
  createBook,
  deleteBook,
  updateAdmin
}
