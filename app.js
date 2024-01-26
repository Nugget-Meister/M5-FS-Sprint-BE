const express= require('express')
const cors = require('cors')

const app = express()

// Controller Import


//
app.use(cors())
app.use(express.json())

// Controller use


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