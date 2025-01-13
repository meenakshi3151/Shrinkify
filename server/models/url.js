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
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }      
    },
    {timestamp: true}
)
module.exports = mongoose.model('Url', urlModel)