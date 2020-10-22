DROP DATABASE IF EXISTS Baseball;

CREATE DATABASE Baseball;

USE Baseball;

CREATE TABLE Pitchers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  team VARCHAR(255),
  wins INT,
  losses INT,
  games INT,
  gamesStarted INT,
  completeGames INT,
  shutouts INT,
  saves INT,
  saveOpportunities INT,
  inningsPitched INT,
  hits INT,
  runs INT,
  earnedRuns INT,
  homeRuns INT,
  hitBatsmen INT,
  walks INT,
  strikeOuts INT
);

CREATE TABLE Positionals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  position VARCHAR(255),
  team VARCHAR(255),
  games INT,
  atBats INT,
  runs INT,
  hits INT,
  doubles INT,
  triples INT,
  homeRuns INT,
  RBIs INT,
  walks INT,
  strikeOuts INT,
  stolenBases INT,
  caughtStealing INT
);