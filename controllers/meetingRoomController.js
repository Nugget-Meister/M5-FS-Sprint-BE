const express = require('express');


const {
  getAllMeetingRooms,
  createMeetingRoom,
  getOneMeetingRoom,
  updateMeetingRoom,
  deleteMeetingRoom,
} = require("../queries/meeting_room");

const rooms = express.Router();

rooms.get("/", async (req, res) => {
  
    const allMeetingRooms = await getAllMeetingRooms();
  
    // console.log(allMeetingRooms)

    if (allMeetingRooms[0]) {
      res.status(200).json(allMeetingRooms);
    } else {
      res.status(500).json({ error: "Something went wrong!" });
    }
  });

  rooms.get("/:id", async (req, res) => {
    const {id} = req.params
    const oneRoom = await getOneMeetingRoom(id);

  if (oneRoom.meeting_room_id) {
      res.status(200).json(oneRoom);
    } else {
      console.log(oneRoom)
      res.status(500).json({ error: "Something went wrong!" });
    }
  });

  rooms.post("/", async (req, res) => {
    try {
      const createdRoom = await createMeetingRoom(req.body);
      res.status(200).json(createdRoom);
    } catch (error) {
      res.status(400).json({ error: "There is something wrong here!" });
    }
  });

  rooms.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedRoom = await deleteMeetingRoom(id);
      res.status(200).json(deletedRoom);
    } catch (error) {
      res.status(400).json({ error: "There is something wrong here!" });
    }
  });

  rooms.put("/:id", async (req, res) => {
    try {
      res.status(403).json({message: "Forbidden", data:null})
        // const {id} = req.params;
        // const updatedMeetingRoom = await updateMeetingRoom(id,req.body);
        // res.status(200).json(updatedMeetingRoom);
    }   catch (error) {
        // res.status(400).json({error: "janky"});
    }
  });

module.exports = rooms;


