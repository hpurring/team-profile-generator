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

var questions = [
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

// .then(({ employee }) => {
//     employee == 'Manager' 
//         ? getOfficeNumber()
//         : employee == 'Engineer'
//             ? getGitHub()
//             : employee == 'Intern'
//                 ? getSchool()
//                 : ""
// });

// const getId = function() {
//     inquirer
//         .prompt([
//             {
//                 name: 'id',
//                 type: 'input',
//                 message: 'What is their ID?'
//             }
//         ])
// };

// const getEmail = function() {
//     inquirer
//         .prompt([
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: 'What is their email address?'
//             }
//         ])
// };

// const getRole = function() {
//     inquirer
//         .prompt([            
//             {
//                 name: 'employee',
//                 type: "list",
//                 choices: ["Manager", "Engingeer", "Intern","Exit"],
//                 messsage: "What position are we hiring for?"
//             }
//         ])
//         .then(({ employee }) => {
//             employee == 'Manager' 
//                 ? getOfficeNumber()
//                 : employee == 'Engineer'
//                     ? getGitHub()
//                     : employee == 'Intern'
//                         ? getSchool()
//                         : ""
//         });
// };

// function getOfficeNumber() {
//     inquirer
//         .prompt([
//             {
//                 name: 'office',
//                 type: 'input',
//                 message: 'What is their office number?'
//             }
//         ])
// };

// function getGithub() {
//     inquirer
//         .prompt([
//             {
//                 name: 'github',
//                 type: 'input',
//                 message: 'What is their GitHub username?'
//             }
//         ])
// };

// function getSchool() {
//     inquirer
//         .prompt([
//             {
//                 name: 'school',
//                 type: 'input',
//                 message: "What is their school's name?"
//             }
//         ])
// };


// // Write html file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(fileName, data)
// };

// function init() {
//     inquirer.prompt(questions)
//     .then(data => {
//         console.log("Generate HTML...");
//         writeToFile("index.html", generateHtml(data));
//     })
// }

// // Function call to initialize app
// init();