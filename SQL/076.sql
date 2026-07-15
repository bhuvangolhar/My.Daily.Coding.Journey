-- MySQL query: Cross join

SELECT Users.name, Orders.product
FROM Users
CROSS JOIN Orders;