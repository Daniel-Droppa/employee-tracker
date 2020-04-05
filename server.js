var mysql = require("mysql");
var inquirer = require("inquirer")
var ctable = require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  init()

});
console.log(`
███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗    
██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝    
█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗      
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝      
███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗    
╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝ 
███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗██████╗            
████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗           
██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██████╔╝           
██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██╔══██╗           
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║  ██║           
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝           
                                                                         
`);

function init() {
  inquirer.prompt({
    name: "menuOptions",
    type: "list",
    message: "What would you like to manage?",
    choices: [
      "Manage employees",
      "Manage departments",
      "Manage roles"
    ]
  }).then(results => {
    switch (results.menuOptions) {
      case "Manage employees":
        manageEmployees();
        console.log("manage emps");

        break;
      case "Manage departments":
        manageDepartments();
        console.log("manage deps");

        break;
      case "Manage roles":
        manageRoles();
        console.log("manage rol");

        break;

    }
  })
}

const manageEmployees = () => {
  inquirer.prompt({
    name: "employeeChoice",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "Add a new employee",
      "Remove an existing employee",
      "Update an employee"
    ]
  }).then(results => {
    switch (results.employeeChoice) {
      case "View all employees":
        viewEmployees();
        break;
      case "Add a new employee":
        addEmployee();
        break;
      case "Remove an existing employee":
        removeEmployee();
        break;
      case "update an employee":
        updateEmployee();
        break;
    }
  })
}



const manageDepartments = () => {
  inquirer.prompt({
    name: "deptOptions",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments.",
      "Add a new department.",
      "Remove an existing department."
    ]
  }).then(results => {
  switch (results.deptOptions) {
    case "View all departments":
      viewDepartments();
      break;
    case "Add a new department":
      addDepartment();
      break;
    case "Remove an existing department":
      removeDepartment();
      break;
  }
})
const manageRoles = () => {
  inquirer.prompt({
      name: 'roleOptions',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
          'View all roles.',
          'Add a new role.',
          'Remove an existing role.',
          '<-- Back.'
      ]
  }).then(results => {
    switch (results.deptOptions) {
      case "View all roles":
        viewDepartments();
        break;
      case "Add a new role":
        addDepartment();
        break;
      case "Remove an existing role":
        removeDepartment();
        break;
    }
  })
}
