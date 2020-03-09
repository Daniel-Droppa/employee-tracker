var mysql = require("mysql");
var inquirer = require("inquirer")

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
const init = function() {
    inquirer
      .prompt({
        type: "list",
        name: "startQ",
        message: "What would you like to do?",
        choices: [
          "view all employees",
          "view all roles",
          "view all departments",
          "add employee",
          "add department",
          "add role",
          "update employee role",
          "remove employee"
        ]
      })
      .then(function(answer) {
        console.log(answer);
        // start of switch statment for user choice
        switch (answer.startQ) {
          case "view all employees":
            viewallemployees();
            break;
  
          case "view all roles":
            viewallroles();
            break;
  
          case "view all departments":
            viewalldepartments();
            break;
  
          case "add employee":
            addEmployee();
            break;
  
          case "update employee role":
            updateEmpRole();
            break;
  
          case "add department":
            addDepartment();
            break;
  
          case "add role":
            addRole();
            break;
        }
      });
  };
  init();

