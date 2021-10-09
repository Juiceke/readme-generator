// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generatePage = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {        
        type: 'input',
        name: 'title',
        message: 'what is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your application covered under?',
        choices: ['Public Domain License', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary', 'No license']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would someone install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give some instructions on how to use your app.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preffered email account for people to ask questions?'
    },
    ])}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};
// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {console.log(data);
    return generateMarkdown(data)
})
    
    
}

// Function call to initialize app
init();
