const Employee = require('./Employee');
const inquirer = require("inquirer");
const index = require("../index");

class Engineer extends Employee {
    constructor(name) {
        super(name);
    
    this.github = getGithub();
    }
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
};

module.exports = Engineer;

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'