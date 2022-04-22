const express = require('express')
const userRoutes = express.Router()
const userController = require('../controller/userController')

userRoutes.get('/api/user',userController.find)
userRoutes.post('/api/user',userController.post)
userRoutes.put('/api/user',userController.put)
userRoutes.delete('/api/user',userController.delete)


module.exports = userRoutes

