const Book = require('../models/book')

export const createBook = async (data) => {
  const instance = Book.create(data)
  return instance.toJSON()
}

export const deleteBook = (bookId) => {
  Book.destroy({
    where: {
      id: bookId
    }
  })
}

export const updateAdmin = (data) => {
  const { id } = data
  Book.update(data, {
    where: {
      id
    }
  })
}
