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


const questions = function() {
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
        .then(({ position }) => {
        position == 'Manager' 
        ? getOfficeNumber()
        : position == 'Engineer'
          ? getGithub()
            : position == 'Intern'
                ? getSchool()
                : ""
        });
};

function getOfficeNumber() {
    inquirer
        .prompt([
            {
                name: 'office',
                type: 'input',
                message: 'What is their office number?'
            }
        ])
    create();
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
    create();
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
    create();
};


// Write html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

function create() {
    data => {
        console.log("Generate HTML...");
        writeToFile("index.html", generateHtml(data));
    }
};

// Function call to initialize app
questions();