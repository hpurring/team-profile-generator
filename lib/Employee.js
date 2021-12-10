const data = require('../index');

const questions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the employee's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email address?'
    },
    {
        name: 'position',
        type: "list",
        choices: ["Manager", "Engingeer", "Intern", "Exit"],
        messsage: "What position are we hiring for?"
    }
];

class Employee {
    constructor(name = '') {
        this.name = questions.name;
        this.id = questions.id;
        this.email = questions.email;
        this.position = questions.position;
    }
}

module.exports = Employee;