-- DROP DATABASE IF EXISTS employeeTracker_DB;

-- CREATE DATABASE employeeTracker_DB;

-- USE employeeTracker_DB;

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments (
DeptID INTEGER,
dep_name VARCHAR(30),
PRIMARY KEY (DeptID)
);	

CREATE TABLE roles (
rolesId INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
-- FOREIGN KEY (DeptID) REFERENCES departments(DeptID),
PRIMARY KEY (rolesId)
);	

CREATE TABLE employees (
id INTEGER AUTO_INCREMENT NOT NULL,
full_name VARCHAR(30),
roles VARCHAR(30),
-- FOREIGN KEY (rolesId ) REFERENCES roles(rolesId),
is_manager BOOLEAN DEFAULT FALSE,
manager VARCHAR(30),
PRIMARY KEY (id)
);	

INSERT INTO roles (title, salary)
VALUES ('Sales Person', 55000), ('Accountant', 12000),('Software Engineer', 85000),('Front End Developer', 75000), ('Back End Developer',85000),('Lawyer',120000);

INSERT INTO departments (dep_name)
VALUES ('Sales'), ('Finance'), ('Development'), ('Legal');
-- SELECT * FROM employees;

SELECT * FROM employees;

SELECT * FROM roles;

SELECT id, full_name, roles, salary, manager FROM
employees LEFT JOIN roles 
ON employees.roles = roles.title;

SELECT id, full_name, dep_name FROM
employees RIGHT JOIN departments 
ON employees.roles = roles.title;


-- DROP DATABASE IF EXISTS employee_db;
-- CREATE DATABASE employee_db;
-- USE employee_db;

-- CREATE TABLE department(
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE roles(
-- id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- title VARCHAR (30),
-- salary DECIMAL NOT NULL,
-- department_id INT NOT NULL,
-- CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
-- );

-- CREATE TABLE employee(
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- first_name VARCHAR(30) NOT NULL,
-- last_name VARCHAR(30) NOT NULL,
-- roles_id INT NOT NULL,
-- CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id),
-- -- manager VARCHAR(30),
-- manager_id INT, 
-- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
-- );

-- SELECT * FROM department;
-- SELECT * FROM roles;
-- SELECT * FROM employee;

-- INSERT INTO department (name)
-- VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Sales Lead", 100000, 1),
--          ("Salesperson", 80000, 1), 
--          ("Lead Engineer", 150000, 2), 
--          ("Software Engineer", 120000, 2),
--          ("Accountant", 125000, 3),
--          ("Lead Lawyer", 190000, 4), 
--          ("Lawyer", 130000, 4); 


