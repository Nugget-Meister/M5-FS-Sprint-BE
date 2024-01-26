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

    } catch(error){
        return error
    }
}

const getMeetingRoom = async(meeting_room) => {
    try{

    } catch(error){
        return error
    }
}

const updateMeetingRoom = async(meeting_room) => {
    try{

    } catch(error){
        return error
    }
}

const deleteMeetingRoom = async(meeting_room) => {
    try{

    } catch(error){
        return error
    }
}

module.exports = {
    getAllMeetingRooms,
    createMeetingRoom,
    getMeetingRoom,
    updateMeetingRoom,
    deleteMeetingRoom,
};