const express = require('express')

const router = express.Router()

const AdminService = require('../../services/admin')

const sendMsg = require('../sendResult')

router.post('/login', async (req, res) => {
  const result = await AdminService.login(req.body.loginId, req.body.loginPwd)
  if (result) {
    const value = result.id
    res.cookie('token', result.id, {
      maxAge: 3600 * 1000,
      httpOnly: true
    })
    res.header('Authorization', value)
    res.send({
      code: 200,
      msg: 'success'
    })
  }
  return result
})
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, pageSize = 10 } = req.query
    const result = await AdminService.getAdminList({ page, pageSize })
    res.setHeader('cookie', 'test=123')
    res.send({
      code: 200,
      msg: 'success',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await AdminService.createAdmin(req.body)
    res.send(sendMsg.getResult())
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await AdminService.deleteAdmin(id)
    res.send(sendMsg.getResult())
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await AdminService.getAdminById(id)
    res.send(sendMsg.getResult(result))
  } catch (error) {
    next(error)
  }
})
module.exports = router
