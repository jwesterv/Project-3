DELETE IF EXISTS FAMILY_DB;

CREATE DATABASE FAMILY_DB;

USE FAMILY_DB;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  joincode VARCHAR(250) NULL,
  isConfirmed BOOLEAN NULL,
  firstname VARCHAR(250) NULL,
  lastname VARCHAR(250) NULL,
  address VARCHAR(250) NULL,
  email VARCHAR(250) NULL,
  dob VARCHAR(250) NULL,
  confirmedBy VARCHAR(250) NULL
  PRIMARY KEY (id)
);

CREATE TABLE calendar (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    joincode TEXT NULL,
    event TEXT NULL,
    eventDate DATE,
    eventTime: DATETIME
);

CREATE TABLE wishes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  joincode VARCHAR(250) NULL,
  isConfirmed BOOLEAN NULL,
  firstname VARCHAR(250) NULL,
  lastname VARCHAR(250) NULL,
  address VARCHAR(250) NULL,
  email VARCHAR(250) NULL,
  dob VARCHAR(250) NULL,
  confirmedBy VARCHAR(250) NULL
  PRIMARY KEY (id)
);