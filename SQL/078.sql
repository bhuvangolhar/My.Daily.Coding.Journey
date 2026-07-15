-- MySQL query: Union of two queries

SELECT name
FROM Users

UNION

SELECT product
FROM Orders;