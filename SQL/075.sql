-- MySQL query: Right join

SELECT Users.name, Orders.product
FROM Users
RIGHT JOIN Orders
ON Users.id = Orders.user_id;