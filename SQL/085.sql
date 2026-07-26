-- MySQL query: Create stored procedure

DELIMITER //

CREATE PROCEDURE GetUsers()
BEGIN
    SELECT * FROM Users;
END //

DELIMITER ;