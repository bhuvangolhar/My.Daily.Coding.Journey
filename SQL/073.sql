-- MySQL query: Inner join

SELECT Users.name, Orders.product
FROM Users
INNER JOIN Orders
ON Users.id = Orders.user_id;