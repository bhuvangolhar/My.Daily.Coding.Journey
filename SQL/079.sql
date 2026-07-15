-- MySQL query: Union of two queries with duplicate values

SELECT name
FROM Users

UNION ALL

SELECT product
FROM Orders;