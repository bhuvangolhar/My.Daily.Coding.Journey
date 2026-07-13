-- MySQL query: Create a second table

CREATE TABLE Orders
(
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product VARCHAR(100)
);