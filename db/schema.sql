DROP DATABASE IF EXISTS space_booking;
CREATE DATABASE space_booking;

\c space_booking;

CREATE TABLE meeting_room(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
)

CREATE TABLE booking(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    meeting_room_id INT,
    start_date DATETIME,
    end_date DATETIME,
    attendees TEXT,
)