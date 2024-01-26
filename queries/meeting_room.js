const db =  require("../db/dbConfig.js");

const getAllMeetingRooms = async() => {
    try{
        const allMeetingRooms = await db.any("SELECT * FROM meeting_room");
        return allMeetingRooms;
    } catch(error){
        return error
    }
}

const createMeetingRoom = async(meeting_room) => {
    try{
        
    }
}