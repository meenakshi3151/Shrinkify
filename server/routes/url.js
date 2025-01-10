const express = require('express')
const router = express.Router()
const {getShortId, updateVisitURL}= require('../controllers/url')
router.get('/generateurl',getShortId)
router.get('/:shortUrl',updateVisitURL)
module.exports=router