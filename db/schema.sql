DROP DATABASE IF EXISTS space_booking;
CREATE DATABASE space_booking;

\c space_booking;

CREATE TABLE meeting_room(
    meeting_room_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INT NOT NULL,
    floor INT NOT NULL
);

CREATE TABLE booking(
    booking_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    meeting_room_id INT,
    start_date DATE,
    end_date DATE,
    start_time TIME,
    end_time TIME,
    attendees TEXT
);