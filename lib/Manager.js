const Employee = require('./Employee');
const inquirer = require("inquirer");
const index = require("../index");


const managerData = [];

function createManager() {
    inquirer
        .prompt([
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
            managerData.push(data)
            console.log(managerData)
        })

};

module.exports = createManager();