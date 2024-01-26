const db = require("../db/dbConfig.js");

const getAllMeetingRooms = async () => {
  try {
    const allMeetingRooms = await db.any("SELECT * FROM meeting_room");
    return allMeetingRooms;
  } catch (error) {
    return error;
  }
};

const createMeetingRoom = async (meeting_room) => {
  try {
    const { name, capacity, floor } = meeting_room;
    const createdMeetingRoom = await db.one(
      "INSERT INTO meeting_room (name, capacity, floor) VALUES ($1,$2,$3) RETURNING *",
      [name, capacity, floor]
    );

    return createdMeetingRoom;
  } catch (error) {
    return error;
  }
};

const getOneMeetingRoom = async (id) => {
  try {
    const oneMeetingRoom = await db.one(
      "SELECT * FROM meeting_room WHERE id = $1",
      id
    );

    return oneMeetingRoom;
  } catch (error) {
    return error;
  }
};

const updateMeetingRoom = async (meeting_room, id) => {
  try {
    const { name, capacity, floor } = meeting_room;
    const updatedMeetingRoom  = await db.one(
        "UPDATE meeting_room SET name=$1, capacity=$2, floor=$3 WHERE id=$4 RETURNING *",
      [name, capacity, floor]
    )
  } catch (error) {
    return error;
  }
};

const deleteMeetingRoom = async (id) => {
  try {
    const deletedMeetingRoom = await db.one(
      "DELETE FROM meeting_room WHERE id = $1 RETURNING * ",
      id
    );

    return deletedMeetingRoom;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMeetingRooms,
  createMeetingRoom,
  getOneMeetingRoom,
  updateMeetingRoom,
  deleteMeetingRoom,
};
