// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// Create questions asking user for details on the project
const questions = [
  //Asks user for project name
  {
    type: "input",
    name: "title",
    message: "What is the projects name? (required)",
  },
  //Asks user for detailed description
  {
    type: "input",
    name: "description",
    message: "Please provide a detailed description of the project. (Required)",
  },
  {
    type: "checkbox",
    name: "license",
    message: "License for current project (Please pick ATLEAST one)",
    choices: [
      "MIT",
      "Do What The F*ck You Want To Public License",
      "Apache license 2.0",
      "Academic Free License v3.0",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "No license!",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please pick a license!");
      }
    },
  },
  { type: "input", name: "testing", message: "How do you test your project?" },
  {
    type: "input",
    name: "installation",
    message: "Please provide an explanation on how to install. (Required)",
  },
  {
    type: "input",
    name: "contributors",
    message: "Were there any contributors on this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project used for? (Required)",
  },
  //Asks user for email
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  //Asks user for git hub username
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
  });
}

// Function call to initialize app
init();
