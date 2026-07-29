-- MySQL query: Create event

CREATE EVENT DeleteChildUsers
ON SCHEDULE EVERY 1 DAY
DO
DELETE FROM Users
WHERE age < 12;