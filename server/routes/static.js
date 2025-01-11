const express= require('express')
const router = express.Router()
const {home, signup} = require('../controllers/static')
router.get('/',home)
router.get('/signup',signup)
module.exports=  router
