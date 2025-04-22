const Student = require('../models/student')

const createBook = async (data) => {
  const instance = Student.create(data)
  return instance.toJSON()
}

const deleteBook = (studentId) => {
  Student.destroy({
    where: {
      id: studentId
    }
  })
}

const updateAdmin = (data) => {
  const { id } = data
  Student.update(data, {
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
