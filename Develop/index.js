const fs = require('fs');
const createMD = require('./utils/generateMarkdown');
const inquirer = require('inquirer')


// array of questions for user
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        default: "awesome_app"
    },
    {
        message: "What is the description of your project?",
        name:"description",
        default: "the best!"
    },
    {
        message: "What contains in the table of contents?",
        name:"table of contents",
        type: "checkbox",
        choices: ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing","Tests", "Questions"],
        default: ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing","Tests", "Questions"]
    },
    {
        message: "what types of installation are used?",
        name: "installation",
        default: "npm install"
    },
    {
        message:"What is the usage for this project?",
        name: "usage",
        default: "npm run start"
    },
    {
        message: "Which license do you want for your project?",
        name: "license",
        type: "list",
        choices: [{name:"MIT", value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
        {name:"BSD", value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"},
        {name: "Apache", value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}],
        default: "MIT"
    },
    {
        message: "Who are the contributors for this project?",
        name:"contributing",
        default: "just me"
    },
    {
        message: "What tests are ran?",
        name:"tests",
        default: "jest"
    },
    {
        message: "What is your GitHub profile link and e-mail?", 
        name:"questions",
        default: "https://github.com/user, example@example.com"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createMD(data), err=> console.log(err||"success!"))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        console.log(response);
        
        //do stuff here with the response
        writeToFile(`${response.title}.md`, response)
    })
}

// function call to initialize program
init();
