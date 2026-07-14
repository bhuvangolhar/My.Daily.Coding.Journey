-- MySQL query: 'Having' clause

SELECT age, COUNT(*)
FROM Users
GROUP BY age
HAVING COUNT(*) > 1;