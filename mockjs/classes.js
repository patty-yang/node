const Mock = require('mockjs')
const result = Mock.mock({
  'data|16': [
    {
      'id|+1': 1,
      name: '前端第 @id 期',
      openDate: '@date'
    }
  ]
}).data

const Class = require('../models/class')
Class.bulkCreate(result)
