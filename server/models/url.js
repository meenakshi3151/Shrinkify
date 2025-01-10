const mongoose = require('mongoose')
const urlModel = mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true
        },
        shortUrl: {
            type: String,
            required: true,
            unique: true
        },
        visitHistory: {
            type: [Date],
            default: [],
        }        
    },
    {timestamp: true}
)
module.exports = mongoose.model('Url', urlModel)