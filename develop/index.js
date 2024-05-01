// TODO: Include packages needed for this application
const inquirer = require("inquirer");



// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
}, {
    type: "input",
    message: "What is the project about?  Give a detailed description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Please provide a link to the project.",
    name: "link"
},{
    type: "input",
    message: "Please provide a screenshot of the project.",
    name: "screenshot"
},{
    type: "input",
    message: "List Table of Contents.",
    name: "table of contents"
},{
    type: "input",
    message: "What needs to be installed to get the project to run?",
    name: "Installation"
},{
    type: "input",
    message: "Provide instructions on how to use the project.",
    name: "Usage"
},{
    type: "input",
    message: "List your collaborators or team members.",
    name: "Credits"
},{
    type: "input",
    message: "What license is being used? Choose from teh following: MIT , Apache-2.0, or none ",
    name: "License"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();