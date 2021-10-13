// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {        
        type: 'input',
        name: 'title',
        message: 'what is the title of your application?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title of your application!');
              return false;
            }
          }
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Mit License', 'Boost Software License 1.0', 'The Unlicense', 'No license']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would someone install your application?',
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('Please enter installation instructions!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter how your application will be used!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your application?',
        validate: contributeInput => {
            if (contributeInput) {
              return true;
            } else {
              console.log('Please enter the contribution guidelines for your application!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give some instructions on how to use your app.',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter some instructions on how to use your app!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preffered email account for people to ask questions?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your preffered email for people to ask questions!');
              return false;
            }
          }
    },
    ])}

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile(`./utils/README.md`, data, err => {
    if (err) {
        throw err
    };
    console.log('ReadMe has been successfully generated! Check the utils directory to see it!')
})
};
// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {console.log(data);
    return generateMarkdown(data);
    })
    .then((data) => {
        writeToFile(data)
    })
}


// Function call to initialize app
init();
