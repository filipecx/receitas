const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config({path: './config/.env'})
const mongoose = require("mongoose");
const connectDB = require('./config/db')
connectDB()
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const homeRoutes = require('./routes/homeRoutes')

app.use('/', homeRoutes)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log("Server running!")
    })
})
