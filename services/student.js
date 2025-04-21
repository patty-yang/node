const Student = require('../models/student')

export const createBook = async (data) => {
  const instance = Student.create(data)
  return instance.toJSON()
}

export const deleteBook = (studentId) => {
  Student.destroy({
    where: {
      id: studentId
    }
  })
}

export const updateAdmin = (data) => {
  const { id } = data
  Student.update(data, {
    where: {
      id
    }
  })
}
