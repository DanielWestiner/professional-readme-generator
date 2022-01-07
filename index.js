// TODO: Include packages needed for this application
// Included Required Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
// Assigning the question prompts to variable
const questions = [
    {
    type: "input",
    message: "Please enter a name for your project.",
    name: "name",
    },

    {
    type: "input",
    message: "Please enter a description for your project.",
    name: "description",
    },

    {
    type: "input",
    message: "Please enter any installation instructions for this project.",
    name: "installation",
    },   
    
    {
    type: "input",
    message: "Please enter any usage inforamtion regarding this project",
    name: "usage",
    },  
    
    {
    type: "list",
    choices: [
        "MIT",
        "Mozilla",
        "Apache",
        "No License"
    ],
    message: "Please select the license you would like to use",
    name: "license",
    },   

    {
    type: "input",
    message: "Please list any contributors to this project",
    name: "contributors",
    },  

    {
    type: "input",
    message: "Please list any tests for this project",
    name: "tests",
    }, 

    {
    type: "input",
    message: "For questions about this project, enter an email",
    name: "contact",
    }
];

const inqPrompts = () => {
    return inquirer
        .prompt(questions);
};

// Function to write README file

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
    {
        err ? console.log(err) : console.log("You've successfully created the README!");;
    });
};

// function to initialize app


const init = () => {
    inqPrompts()
    .then((userAnswers) => writeToFile("./generated-readme/README.md", generateMarkdown(userAnswers)))
}

// Function call to initialize app
init();
