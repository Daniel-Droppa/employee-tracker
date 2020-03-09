DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE department(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
roles_id INT NOT NULL,
CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id),
manager_id INT, 
CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
         ("Salesperson", 80000, 1), 
         ("Lead Engineer", 150000, 2), 
         ("Software Engineer", 120000, 2),
         ("Accountant", 125000, 3),
         ("Lead Lawyer", 190000, 4), 
         ("Lawyer", 130000, 4); 


