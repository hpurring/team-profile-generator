const inquirer = require("inquirer");
const generateHtml = require("./src/template");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const path = require("path");

const outputDirectory = path.resolve(__dirname, "output");

const outputPath = path.join(outputDirectory, "team.html");

const render = require("./src/template.js");
const { listenerCount } = require("process");

const teamData = [];

const questions = employeeData => {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the employee's name.");
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is their ID?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the employee's ID.");
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is their email address?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the employee's email address.");
                        return false;
                    }
                }
            },
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
            teamData.push(employeeData)
            console.log(employeeData)
            if (employeeData.position == 'Manager') {
                getOfficeNumber();
            } else if (EmployeeData.position == 'Engineer') {
                getGithub();
            } else {
                getSchool();
            };
        })

function getOfficeNumber() {
    inquirer
        .prompt([
            {
                name: 'office',
                type: 'input',
                message: 'What is their office number?'
            }
        ])
    
    .then(employeeData => {
        teamData.push(employeeData)
        console.log(teamData)
    })

    // .then((response) => {
    //     enterAdditional()
    // })
};

function getGithub() {
    inquirer
        .prompt([
            {
                name: 'github',
                type: 'input',
                message: 'What is their GitHub username?'
            }
        ])

    .then(employeeData => {
        teamData.push(employeeData)
    })

    .then((response) => {
        enterAdditional()
    })
};

function getSchool() {
    inquirer
        .prompt([
            {
                name: 'school',
                type: 'input',
                message: "What is their school's name?"
            }
        ])
    .then(employeeData => {
        teamData.push(employeeData)
    })
    
    .then((response) => {
        enterAdditional()
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
        teamData.push(employeeData)
        if (employeeData.confirmAdd) {
          return questions(teamData);
        } else {
          create();
        }
      })
    };

    // Write html file
    function writeToFile(fileName, employeeData) {
        const outputDirectory = path.resolve(__dirname, "output");
        const outputPath = path.join(outputDirectory, "team.html");

        return fs.writeFileSync(outputPath, generateHtml(employeeData));
        
    };

    function create() {
        console.log("Generate HTML...");
        writeToFile();
    };

};

// // Write html file
// function writeToFile(fileName, employeeData) {
//     return fs.writeFileSync(fileName, employeeData)
// };

// function create() {
//     console.log("Generate HTML...");
//     writeToFile("index.html", generateHtml(employeeData));
// };

// Function call to initialize app
questions();