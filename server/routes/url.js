const express = require('express')
const router = express.Router()
const {getShortId, updateVisitURL, getAllUrls}= require('../controllers/url')
router.post('/generateurl',getShortId)
router.get('/api/urls/:shortUrl',updateVisitURL)
router.get('/getAll',getAllUrls)
module.exports=router