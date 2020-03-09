DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30),
PRIMARY KEY (id)
);
CREATE TABLE roll (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
  roll_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);



-- CREATE TABLE employees (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(100) NOT NULL,
--   last_name VARCHAR(100) NOT NULL,
--   title VARCHAR(100) NOT NULL,
--   departemnt VARCHAR(100) NOT NULL,
--   salary INT default 0,
--   manager VARCHAR(100) NULL,
--   PRIMARY KEY (id)
-- );

-- INSERT INTO employees (first_name, last_name, title, departemnt, salary, manager)
-- VALUES ("John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriguez");

-- INSERT INTO employees (first_name, last_name, title, departemnt, salary, manager)
-- VALUES ("Mike","Chan", "Sales Person", "Sales", 80000, "John Doe");

-- INSERT INTO employees (first_name, last_name, title, departemnt, salary, manager)
-- VALUES ("Ashley", "Rodriguez", "Lead Engeneer", "Engeneering", 150000, null);