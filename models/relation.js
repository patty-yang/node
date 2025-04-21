// 设置模型关系
const ClassEs = require('./class')
const Student = require('./student')

ClassEs.hasMany(Student)
Student.belongsTo(ClassEs)
