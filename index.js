const inquirer = require("inquirer");

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

// const createTeam = function() {
    inquirer
        .prompt([
            {
                name: 'employee',
                type: "list",
                choices: ["Manager", "Engingeer", "Intern","Exit"],
                messsage: "What position are we hiring for?"
            }

        ])
        .then(({ employee }) => {
            employee == 'Manager' 
                ? createMgr 
                : employee == 'Engineer'
                    ? createEngineer
                    : employee == 'Intern'
                        ? createIntern
                        : ""
                             
        })

// }

function createManager() {
    inquirer
        .prompt
    
}