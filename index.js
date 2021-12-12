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

const createEmployee = employeeData => {
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
            } else if (employeeData.position == 'Engineer') {
                createEngineer();
            } else {
                createIntern();
            };
            enterAdditional();
        })

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
createEmployee();