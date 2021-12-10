const Employee = require('./Employee');

class Engineer extends Employee {

    getGithub() {
        inquirer
        .prompt([
            {
                name: 'github',
                type: 'input',
                message: 'What is their GitHub username?'
            }
        ])
    };
};

module.exports = Engineer;

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'