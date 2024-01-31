const express = require('express')

const bookings = express.Router()

const {
    getAllBookings,
    getSingleBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require('../queries/booking.js')

bookings.get('/', async (req, res) => {
    const result = await getAllBookings();
    process.stdout.write("GET Request recieved for ALL items... ")
    if(result){
        if(result.severity){
            console.log("Error detected.")
            res.status(500).json({
                message: "BAD",
                data: result
            })
        } else {
            console.log("Attempting to dispense.")
            if(result.length == 0){
                console.log(`Warning - Database returned no results.`)
            }
            res.status(200).json({
                message: "OK",
                data: result
            })
        }

       
        
    } else {
        console.log("500 - Unable to access SQL server.")
        res.status(500).json({
            message: "Unable to access server.",
            data: null
        })
    }
})


bookings.get('/:id', async (req, res) => {
    const {id} = req.params;
    process.stdout.write(`GET Request received for booking at id ${id}... `)
    const result = await getSingleBooking(id);
    if(result){
        console.log(`Found ${result.name}`)
        res.status(200).json({
            message: "OK",
            data: result
        })
    } else {
        console.log(`ERROR - No item found with id ${id}`)
        res.status(500).json({
            message: "No item found.",
            data: null
        })
    }
})


bookings.post('/', async (req, res) => {
    process.stdout.write("POST Request received for 'Bookings'... ")
    const result = await createBooking(req.body)
    console.log(result)
    if(result.booking_id){ 
        console.log("Success")
        res.status(200).json({
            message: "Added data to table",
            data: result
        })
    } else {
        console.log("Failed.")
        res.status(500).json({
            message: "Failed to add data to table",
            data: null
        })
    }
})
bookings.put('/:id', async (req, res) => {
    const {id} = req.params
    process.stdout.write(`PUT Request received for Bookings at id ${id}... `)
    const result = await updateBooking(id, req.body)
    if(result.booking_id){ 
        console.log(`Wrote data at id ${id}`)
        res.status(200).json({
            message: `Successfully changed data at id ${id}`,
            data: result
        })
    } else {
        console.log(`Failed to write at id ${id}`)
        res.status(404).json({
            message: `Failed to change data at ${id}. May not exist`,
            data: null
        })
    }

})
bookings.delete('/:id', async (req, res) => {
    const {id} = req.params
    process.stdout.write(`DELETE Request received for Bookings at id ${id}... `)
    const result = await deleteBooking(id)
    if (result.booking_id){
        console.log("Success!")
        res.status(200).json({
            message: `Deleted item at id ${id}`,
            data: null
        })
    } else {
        console.log("Failed");
        console.log(result)
        res.status(404).json({
            message: `Item with id ${id} not found`,
            data: null
        })
    }
})

module.exports = bookings
