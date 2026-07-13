-- MySQL query: Foreign key

CREATE TABLE Orders
(
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product VARCHAR(100),

    FOREIGN KEY (user_id)
    REFERENCES Users(id)
);