-- MySQL query: Create trigger

DELIMITER //

CREATE TRIGGER BeforeUserInsert
BEFORE INSERT
ON Users
FOR EACH ROW
BEGIN
    SET NEW.age = IFNULL(NEW.age, 18);
END //

DELIMITER ;