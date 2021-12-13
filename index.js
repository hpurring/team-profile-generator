const inquirer = require("inquirer");
const generateHtml = require("./src/template");

// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const path = require("path");

// const outputDirectory = path.resolve(__dirname, "output");

// const outputPath = path.join(outputDirectory, "team.html");

// const render = require("./src/template.js");
// const { listenerCount } = require("process");

const teamData = [];

function createEmployee() {
    inquirer
        .prompt([
            {
                name: 'position',
                type: 'list',
                choices: ["Manager", "Engineer", "Intern"],
                messsage: "What position are we hiring for?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the employee's title.");
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            if (employeeData.position == 'Manager') {
                createManager();
                // enterAdditional();
            } else if (employeeData.position == 'Engineer') {
                createEngineer()
            } else {
                createIntern();
            };
        })

};

function createEngineer() {
    inquirer
        .prompt([
            {
                name: 'position',
                type: 'input',
                message: "What is the new hire's title?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the new hire's title.");
                        return false;
                    }
                }
            },
            {
                name: 'name',
                type: 'input',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the engineer's name.");
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: "What is the engineer's ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the engineer's ID.");
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: "What is the engineer's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the engineer's email address.");
                        return false;
                    }
                }
            },
            {
                name: 'github',
                type: 'input',
                message: "What is engineer's GitHub username?"
            }
        ])
        .then(data => {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github)
            teamData.push(newEngineer);
            enterAdditional();
        })

};

function createIntern() {
    inquirer
        .prompt([
            {
                name: 'position',
                type: 'input',
                message: "What is the new hire's title?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the new hire's title.");
                        return false;
                    }
                }
            },
            {
                name: 'name',
                type: 'input',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the intern's name.");
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: "What is the intern's ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the intern's ID.");
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: "What is the intern's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the intern's email address.");
                        return false;
                    }
                }
            },
            {
                name: 'school',
                type: 'input',
                message: "In which college/university is the intern currently enrolled?"
            }
        ])
        .then(data => {
            const newIntern = new Intern(data.name, data.id, data.email, data.school)
            teamData.push(newIntern);
            enterAdditional();
        })
};

function createManager() {
    inquirer
        .prompt([
            {
                name: 'position',
                type: 'input',
                message: "What is the new hire's title?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the new hire's title.");
                        return false;
                    }
                }
            },
            {
                name: 'name',
                type: 'input',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the manager's name.");
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: "What is the manager's ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the manager's ID.");
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: "What is the manager's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the manager's email address.");
                        return false;
                    }
                }
            },
            {
                name: 'office',
                type: 'input',
                message: "What is the manager's office number?"
            }
        ])
        .then(data => {
            const newManager = new Manager(data.name, data.id, data.email,data.office)
            teamData.push(newManager);
            enterAdditional();
        })
};

function enterAdditional() {
    inquirer
        .prompt([
            {
                name: 'confirmAdd',
                type: 'confirm',
                message: "Would you like to enter additional employees?"
            }
        ])

    .then(employeeData => {
        if (employeeData.confirmAdd) {
          createEmployee();
        } else {
          create();
        }
    })
};

function writeToFile(fileName, teamData) {
    const outputDirectory = path.resolve(__dirname, "output");
    const outputPath = path.join(outputDirectory, "team.html");
    return fs.writeFileSync(fileName, teamData);
};

function create() {
    console.log(teamData);
    console.log("Generate HTML...");
    writeToFile("team.html", generateHtml(teamData));
};

// Function call to initialize app
createEmployee();

