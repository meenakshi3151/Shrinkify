const express = require('express')
const mongoose = require('mongoose')
const app = express()
const  urlRoute = require('./routes/url')
const process = require('process');
const dotenv = require('dotenv')
const {connectDB}=require('./db')
connectDB()
dotenv.config()
app.use(express.json())
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
app.use('/',urlRoute)

