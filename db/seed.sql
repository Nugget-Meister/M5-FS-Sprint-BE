\c space_booking;

INSERT INTO meeting_room(name,capacity,floor)
VALUES
('Meeting Room 1', 6, 22),
('Board Room 2', 12, 21),
('Hub', 30, 22);

INSERT INTO booking(name,meeting_room_id,start_date,end_date,start_time,end_time,attendees)
VALUES
('Team Alpha - Scrum Standup', 2, '2022-03-30', '2022-03-30', '09:30:00', '09:45:00', 'youreemail@gmail.com'),
('Project Eureka - Requirements Gathering', 1, '2022-03-30', '2022-03-30', '14:00:00', '15:00:00', 'youreemail@gmail.com'),
('Star Team - Backlog Refinement', 2, '2022-03-29', '2022-03-29', '10:00:00', '11:00:00', 'youreemail@gmail.com')
;