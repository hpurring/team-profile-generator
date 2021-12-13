const Employee = require('./Employee');
const inquirer = require("inquirer");
const index = require("../index");


const internData = [];

// function createIntern() {
//     inquirer
//         .prompt([
//             {
//                 name: 'name',
//                 type: 'input',
//                 message: "What is the intern's name?",
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log("Please provide the intern's name.");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 name: 'id',
//                 type: 'input',
//                 message: "What is the intern's ID?",
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log("Please provide the intern's ID.");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: "What is the intern's email address?",
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log("Please provide the intern's email address.");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 name: 'school',
//                 type: 'input',
//                 message: "In which college/university is the intern currently enrolled?"
//             }
//         ])
//         .then(data => {
//             internData.push(data)
//             console.log(internData)
//         })

// };

// module.exports = createIntern;