const Employee = require('./Employee');
const inquirer = require("inquirer");
const enterAdditional = require("../index");

const engineerData = [];

function createEngineer() {
    inquirer
        .prompt([
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
            engineerData.push(data)
            console.log(engineerData)
            enterAdditional();
        })

};

module.exports = createEngineer;

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'