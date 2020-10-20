DROP DATABASE IF EXISTS Baseball;

CREATE DATABASE Baseball;

USE Baseball;

CREATE TABLE Stats (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  position VARCHAR(255),
  number INT
);

INSERT INTO Stats (name, position, number) VALUES ('nathan', 'pitcher', 8);
INSERT INTO Stats (name, position, number) VALUES ('maddie', 'catcher', 69);