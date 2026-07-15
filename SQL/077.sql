-- MySQL query: Self join

SELECT A.name, B.name
FROM Users A
JOIN Users B
ON A.id <> B.id;