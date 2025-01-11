const express= require('express')
const router = express.Router()
const {home, signup, login} = require('../controllers/static')
router.get('/home',home)
router.get('/',signup)
router.get('/login',login)
module.exports=  router
