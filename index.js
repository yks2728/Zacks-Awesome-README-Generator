const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown');


const questions = [{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
        }
    }
},
{
    type: 'input',
    name: 'repo',
    message: 'Enter the title of your repo (Required)',
    validate: repoInput => {
        if (repoInput) {
            return true;
        } else {
            console.log('Please enter the title of your repo!');
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your repo (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a description for your repo!');
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have (Required)',
    choices: ['Apache', 'MIT', 'GPL', 'None']
},
{
    type: 'input',
    name: 'installation',
    message: 'What commands do you need to run to install dependencies',
    default: 'npm i'
},
{
    type: 'input',
    name: 'tests',
    message: 'What commands do you need to run to test the application',
    default: 'npm test'
},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about the repo (Required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please enter user information!');
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know to contribute to the repo (Required)',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Please enter what the user needs to contribute!');
        }
    }
}]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,'/dist',fileName), data)
}


function init() {
    inquire.prompt(questions)
    .then(response => {
        writeToFile('README.md', markdown(response))
    });
}


init();



