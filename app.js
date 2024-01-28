const express = require('express')
const cors = require('cors')

const app = express()

// Controller Import

const bookingController = require('./controllers/bookingsController');

//
app.use(cors())
app.use(express.json())

// Controller use

app.use('/booking', bookingController)

// Base Routes
app.get('/', (req, res) => {
    res.send("This is the home page.")
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "No such route exists",
        data: null
    })
})

module.exports = app