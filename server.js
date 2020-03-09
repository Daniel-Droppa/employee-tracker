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

    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Welcome to our employee database! What would you like to do?",
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add an employee",
                "Add department",
                "Add a role",
                "Delete employee",
                "Update employee role",
                "EXIT"
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "View all employees":
                    viewEmployees();
                    break;
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Delete employee":
                    deleteEmp();
                    break;
                case "Update employee role":
                    updateRole();
                    break;
                case "EXIT":
                    connection.end();
                    break;
                default:
                    break;
            }
        })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;

        console.log(res.length + " employees found!");
                console.table(res);
        init();
    })


}

function viewDepartments() {

    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    })
}

function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    })
}
function addEmployee() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "Employee's fist name: ",
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Employee's last name: "
                },
                {
                    name: "role",
                    type: "list",
                    choices: function () {
                        var roleArray = [];
                        for (let i = 0; i < res.length; i++) {
                            roleArray.push(res[i].title);
                        }
                        return roleArray;
                    },
                    message: "What is this employee's role? "
                },
                

            ]).then(function (answer) {
                let rolesID;
                for (let j = 0; j < res.length; j++) {
                    if (res[j].title == answer.role) {
                        rolesID = res[j].id;
                        console.log(rolesID)
                    }
                }
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        roles_id: rolesID,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee has been added!");
                        init();
                    }
                )
            })
    })
}
function addDepartment() {
    inquirer
        .prompt([
            {
                name: "new_dept",
                type: "input",
                message: "What is the new department you would like to add?"
            }
        ]).then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.new_dept
                }
            );
            var query = "SELECT * FROM department";
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.table('All Departments:', res);
                init();
            })
        })
}
function addRole() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "new_role",
                    type: "input",
                    message: "What is the Title of the new role?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary of this position? (Enter a number?)"
                },
                {
                    name: "deptChoice",
                    type: "rawlist",
                    choices: function () {
                        var deptArry = [];
                        for (let i = 0; i < res.length; i++) {
                            deptArry.push(res[i].name);
                        }
                        return deptArry;
                    },
                }
            ]).then(function (answer) {
                let deptID;
                for (let j = 0; j < res.length; j++) {
                    if (res[j].name == answer.deptChoice) {
                        deptID = res[j].id;
                    }
                }

                connection.query(
                    "INSERT INTO roles SET ?",
                    {
                        title: answer.new_role,
                        salary: answer.salary,
                        department_id: deptID
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log("Your new role has been added!");
                        init();
                    }
                )
            })
    })

}
// function deleteEmp() {
//     connection.query("SELECT * FROM employee", function (err, res) {
//         if (err) throw err;
//         inquirer
//         .prompt([
//         {
//             name: "role",
//             type: "list",
//             choices: function () {
//                 var roleArray = [];
//                 for (let i = 0; i < res.length; i++) {
//                     roleArray.push(res[i].first_name + res[i].last_name);
//                 }
//                 return roleArray;
//             },
//             message: "What is this employee's name? "
//         }
//     ]).then(function(answer){
//     connection.query("DELETE FROM employee WHERE ?",
//     {

//     }
    
//     )

//     })
//     })
// }