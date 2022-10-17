// Main menu
var http = require("http");
const axios = require("axios");
const displayPic = () => {
  console.log(`
`);
};

const inquirer = require("inquirer");

const promptMenu = () => {
  return inquirer.prompt({
    type: "list",
    name: "query",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Exit Application"
    ],
  });
};

const handleQuery = (data) => {
  if (data.query === "View all departments") {
    axios
      .get("http://localhost:3001/api/departments")
      .then((res) => {
        console.log("\n");
        console.table(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (data.query === "View all roles") {
    axios
      .get("http://localhost:3001/api/roles")
      .then((res) => {
        console.log("\n");
        console.table(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (data.query === "View all employees") {
    axios
      .get("http://localhost:3001/api/employees")
      .then((res) => {
        console.log("\n");
        console.table(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (data.query === "Add a department") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "param",
          message: "What is the name of the department?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("The department name is required.");
              return false;
            }
          },
        },
      ])
      .then((data) => {
        axios
          .post("http://localhost:3001/api/departments", {
            name: data.param,
          })
          .then((res) => {
            console.log("\n");
            console.log(res.data.message);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  } else if (data.query === "Add a role") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the job title of the role?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("A job title is required for the role.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of the role?",
          validate: (salaryInput) => {
            if (salaryInput) {
              return true;
            } else {
              console.log("A salary is required.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "department",
          message: "What is the department ID of the role?",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("A deparement ID is required.");
              return false;
            }
          },
        },
      ])
      .then((data) => {
        axios
          .post("http://localhost:3001/api/roles", {
            title: data.title,
            salary: data.salary,
            department_id: data.department,
          })
          .then((res) => {
            console.log("\n");
            console.log(res.data.message);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  } else if (data.query === "Add an employee") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?",
          validate: (fnameInput) => {
            if (fnameInput) {
              return true;
            } else {
              console.log("A first name is required.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
          validate: (salaryInput) => {
            if (salaryInput) {
              return true;
            } else {
              console.log("A last name is required.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "role_id",
          message: "What is the employee's role ID?",
          validate: (roleInput) => {
            if (roleInput) {
              return true;
            } else {
              console.log("The role ID is required.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "manager_id",
          message: "What is the ID for the manager?",
        },
      ])
      .then((data) => {
        axios
          .post("http://localhost:3001/api/employees", {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: data.role_id,
            manager_id: data.manager_id,
          })
          .then((res) => {
            console.log("\n");
            console.log(res.data.message);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  } else if (data.query === "Update an employee role") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "emp_id",
          message:
            "What is the ID of the employee you wish to update?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("The ID is required.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "role_id",
          message:
            "Enter the role ID for this employee: ",
          validate: (salaryInput) => {
            if (salaryInput) {
              return true;
            } else {
              console.log("The role ID is required.");
              return false;
            }
          },
        },
      ])
      .then((data) => {
        axios
          .put(`http://localhost:3001/api/employee/${data.emp_id}`, {
            role_id: data.role_id,
          })
          .then((res) => {
            console.log("\n");
            console.log(res.data.message);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  } else {
    process.exit()
  }
};

module.exports = { promptMenu, displayPic, handleQuery };