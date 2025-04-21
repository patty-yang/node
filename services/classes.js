const Classes = require('../models/class')

export const createBook = async (data) => {
  const instance = Classes.create(data)
  return instance.toJSON()
}

export const deleteBook = (classId) => {
  Classes.destroy({
    where: {
      id: classId
    }
  })
}

export const updateAdmin = (data) => {
  const { id } = data
  Classes.update(data, {
    where: {
      id
    }
  })
}
