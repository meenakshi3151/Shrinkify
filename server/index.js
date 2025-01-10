const express = require('express')
const mongoose = require('mongoose')
const app = express()
const  urlRoute = require('./routes/url')
const process = require('process');
const dotenv = require('dotenv')
const staticRoutes = require('./routes/static')
const {connectDB}=require('./db');
const path = require('path');
connectDB()
dotenv.config()
app.set("view engine","ejs")
// app.set("views",path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
app.use('/',urlRoute)
app.use('/',staticRoutes)

// now we want to have the ui so for this we an make a route and add h1 tag and content 
// in it 
/* There are some templating engins for handling html ui code in backend 
that are : pugjs EJS */
