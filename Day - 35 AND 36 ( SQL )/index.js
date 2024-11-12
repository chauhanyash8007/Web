// CREATE 	DATABASE college;

// USE college;

// CREATE TABLE student (
//     rollno INT,
//     name VARCHAR(30),
//     age INT
// );

// INSERT INTO student
// VALUES
// (101,"Yash",12),
// (102,"Priyanshu",14);

// SELECT * FROM student;

// CREATE DATABASE IF NOT EXISTS yash;
// DROP DATABASE IF EXISTS yash;
// SHOW DATABASES;
// SHOW TABLES;

// CREATE DATABASE instagram;
// USE instagram;

// CREATE TABLE user (
//     id INT,
//     age INT,
//     name VARCHAR(30) NOT NULL,
//     email VARCHAR(50) UNIQUE,
//     followers INT DEFAULT 0,
//     following INT,
//     CONSTRAINT CHECK (age>=13),
//     PRIMARY KEY (id)
// );

// INSERT INTO user
// (id, age, name, email, followers, following)
// VALUES
// (1,14,"adam","adam@yahoo.in",123,145),
// (2,15,"bob","bob123@gmail.com",200,200),
// (3,16,"casey","casey@email.com",300,306),
// (4,17,"donald","donald@gmail.com",200,105);

// ALTER TABLE user
// ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

// INSERT INTO user
// (id, age, name, email, followers, following)
// VALUES
// (5,14,"eve","eve@yahoo.in",400,145),
// (6,16,"farha","farha@gmail.com",10000,1000);

// INSERT INTO user
// (id, name, email, following)
// VALUES
// (7,"Yash","Yash@yahoo.in",120);

// ALTER TABLE user
// DROP COLUMN age;

// ALTER TABLE InstaUser
// RENAME TO user;

// UPDATE user
// SET followers=600
// WHERE age=16;

// DELETE FROM user
// WHERE name="eve";

// ALTER TABLE user
// CHANGE COLUMN followers subs INT DEFAULT 0;

// ALTER TABLE user
// MODIFY subs INT DEFAULT 5;

// TRUNCATE TABLE user;
// DROP TABLE user;
// SELECT * FROM user;

// SET SQL_SAFE_UPDATES = 0;

// SELECT name, followers
// FROM user
// WHERE followers>=200;

// SELECT name, age
// FROM user
// WHERE age + 1 = 18;

// SELECT *
// FROM user
// WHERE age BETWEEN 15 AND 17;

// SELECT name, age, followers
// FROM user
// WHERE age NOT IN (14, 16);

// SELECT *
// FROM user
// WHERE age > 14
// LIMIT 2;

// SELECT *
// FROM user
// ORDER BY age DESC;

// SELECT AVG(followers)
// FROM user;

// SELECT name,age,max(followers)
// FROM user
// GROUP BY age;

// SELECT age, max(followers)
// FROM user
// WHERE following>200
// GROUP BY age
// HAVING max(followers)>200
// ORDER BY age DESC;

// INSERT INTO user
// (id, age, name)
// VALUES
// (2, 20);

// SELECT id, name, email FROM user;
// SELECT * FROM user;
// SELECT DISTINCT age FROM user;

// CREATE TABLE post (
//     id INT PRIMARY KEY,
//     content VARCHAR(100),
//     user_id INT,
//     FOREIGN KEY (user_id) REFERENCES user(id)
// );

// INSERT INTO post
// (id, content, user_id)
// VALUES
// (101,"Hello World",1),
// (102,"Bye Bye",2),
// (103,"Hello Delta",3),
// (104,"Hi",4);

// DROP TABLE post;

// SELECT * FROM post;

// DROP DATABASE college;
// CREATE DATABASE college;
// USE college;

// CREATE TABLE Teacher(
//     id INT PRIMARY KEY,
//     name VARCHAR(50),
//     subject VARCHAR(50),
//     salary INT
// );

// INSERT INTO Teacher
// (id, name, subject, salary)
// VALUES
// (23,"ajay","math",50000),
// (47,"bharat","english",60000),
// (18,"chetan","chemistry",45000),
// (9,"divya","physics",75000);

// SELECT * FROM Teacher;

// SELECT *
// FROM Teacher
// WHERE salary>55000;

// ALTER TABLE Teacher
// CHANGE COLUMN salary ctc INT;

// UPDATE Teacher
// SET ctc= ctc + ctc * 0.25;

// SET SQL_SAFE_UPDATES=0;

// ALTER TABLE Teacher
// ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

// ALTER TABLE Teacher
// DROP COLUMN ctc;

// CREATE TABLE student(
//     rollno INT PRIMARY KEY,
//     name VARCHAR(30),
//     city VARCHAR(30),
//     marks INT
// );

// INSERT INTO student
// (rollno, name, city, marks)
// VALUES
// (110,"ada","Delhi",76),
// (108,"bob","Mumbai",65),
// (124,"casey","Pune",94),
// (112,"duke","Pune",80);

// SELECT * FROM student;

// SELECT * FROM
// student
// WHERE marks>75;

// SELECT DISTINCT city FROM student;

// SELECT city FROM student
// GROUP BY city;

// SELECT city, max(marks) FROM student
// GROUP BY city;

// SELECT AVG(marks)
// FROM student;

// ALTER TABLE student
// ADD COLUMN grade VARCHAR(2);

// UPDATE student
// SET grade="O"
// WHERE marks>=80;

// UPDATE student
// SET grade="A"
// WHERE marks>=70 AND marks<80;

// UPDATE student
// SET grade="B"
// WHERE marks BETWEEN 60 AND 70;

// UPDATE student
// SET grade="B"
// WHERE marks>=60 AND marks<70;
