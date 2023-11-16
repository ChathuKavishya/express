const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware')
const connectDB = require('./db')
const port = process.env.PORT || 8080

const app  = express()

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server stared on port ${port}`))