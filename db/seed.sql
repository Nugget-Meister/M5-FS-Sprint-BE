\c space_booking;

INSERT INTO meeting_room(name,capacity,floor)
VALUES
('Meeting Room 1', 30, 4),
('Board Room', 15, 10),
('Hub', 30, 1);

INSERT INTO booking(name,meeting_room_id,start_date,end_date,attendees)
VALUES
('Hub two', 28, 2024-02-14 12:30:00, 2024-02-14 01:30:00, 'youreemail@gmail.com');