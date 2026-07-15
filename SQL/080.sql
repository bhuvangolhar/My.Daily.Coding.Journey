-- MySQL query: Create view

CREATE VIEW MatureUsers AS

SELECT *
FROM Users
WHERE age >= 18;