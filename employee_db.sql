DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  departemnt VARCHAR(100) NOT NULL,
  salary INT default 0,
  manager VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);