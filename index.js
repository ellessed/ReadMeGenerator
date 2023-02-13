// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is you GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your Project?",
      },

      {
        type: "input",
        name: "description",
        message: "Provide a short description explaining your project",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage",
      },
      {
        type: "input",
        name: "contributions",
        message: "List your collaborators, if any",
      },
      {
        type: "input",
        name: "tests",
        message: "What are the tests for this app?",
      },

      {
        type: "list",
        name: "license",
        message: "choose licence",
        choices: ["Apache", "MIT", "GPL 3.0", "None"],
      },
    ])
    // TODO: Create a function to write README file
    .then((data) => {
      const generatedData = generateMarkdown(data);
      const readMeFile = fs.writeFileSync(
        path.join("./", "generatedReadMe.md"),
        generatedData
      );
      return readMeFile;
    });
};

init();
