-- MySQL query: Unique constraint

CREATE TABLE Users
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT NOT NULL
);