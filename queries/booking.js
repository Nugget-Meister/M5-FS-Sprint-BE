const db =  require("../db/dbConfig.js");

const getAllBookings = async () => {
    try{
        const result = await db.any("SELECT * FROM booking")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleBooking = async (id) => {
    try{
        const result = await db.one("SELECT * FROM booking WHERE booking_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createBooking = async (data) => {
    try{
        const result = await db.one("INSERT INTO booking (name, meeting_room_id, start_date, end_date, start_time, end_time, attendees) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",[
            data.name,
            data.meeting_room_id,
            data.start_date,
            data.end_date,
            data.start_time,
            data.end_time,
            data.attendees,
        ])
        return result
    }
    catch(error){
        return error
    }
}
const updateBooking = async (id, data) => {
    try{
        const result = await db.one("UPDATE booking SET name=$1, meeting_room_id=$2, start_date=$3, end_date=$4, start_time=$5, end_time=$6, attendees=$7 WHERE booking_id=$8 RETURNING *", [
            data.name,
            data.meeting_room_id,
            data.start_date,
            data.end_date,
            data.start_time,
            data.end_time,
            data.attendees,
            id
        ]) 
        return result
    }
    catch(error){
        return error
    }
}
const deleteBooking = async (id) => {
    try{
        const result = await db.one("DELETE FROM booking WHERE booking_ id=$1 RETURNING *", id)
        return result
    }
    catch(error){
        return error
    }
}

module.exports = {
    getAllBookings,
    getSingleBooking,
    createBooking,
    updateBooking,
    deleteBooking
}