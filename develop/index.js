// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
}, {
    type: "input",
    message: "What is the project about?  Give a detailed description of your project.",
    name: "description"
}, {
    type: "input",
    message: "Please provide a link to the project.",
    name: "link"
}, {
    type: "input",
    message: "Please provide a screenshot of the project.",
    name: "screenshot"
}, {
    type: "input",
    message: "List Table of Contents.",
    name: "table of contents"
}, {
    type: "input",
    message: "What needs to be installed to get the project to run?",
    name: "installation"
}, {
    type: "input",
    message: "Provide instructions on how to use the project.",
    name: "usage"
}, {
    type: "input",
    message: "List your collaborators or team members.",
    name: "credits"
}, {
    type: "input",
    message: "What license is being used? Choose from teh following: MIT , Apache-2.0, or none ",
    name: "license"
}, {
    type: "input",
    message: "What is your github name",
    name: "githubUsername"
}, {
    type: "input",
    message: "What is your email?",
    name: "email"

}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFile('README.md', questions(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been created!');
        }
    });
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt([
        
    ]).then((answers) => {
       
        const readmeContent = questions(answers);
 })
}

// Function call to initialize app

init();
