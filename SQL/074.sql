-- MySQL query: Left join

SELECT Users.name, Orders.product
FROM Users
LEFT JOIN Orders
ON Users.id = Orders.user_id;