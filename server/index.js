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
// now we want to have the ui so for this we an make a route and add h1 tag and content 
// in it 
/* There are some templating engins for handling html ui code in backend 
that are : pugjs EJS */
