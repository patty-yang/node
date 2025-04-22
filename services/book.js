const Book = require('../models/book')

const createBook = async (data) => {
  const instance = Book.create(data)
  return instance.toJSON()
}

const deleteBook = (bookId) => {
  Book.destroy({
    where: {
      id: bookId
    }
  })
}

const updateAdmin = (data) => {
  const { id } = data
  Book.update(data, {
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
