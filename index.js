// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const licenses = require("./utils/licenses")
const { writeFile, readFile } = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
    },
    // description
    {
        type: "input",
        name: "projectDescription",
        message: "A short description of your project.",
    },
    // installation instructions
    {
        type: "input",
        name: "installationInstructions",
        message: "Provide installation instructions",
    },
    // usage information
    {
        type: "input",
        name: "usageInfo",
        message: "Provide usage information",
    },
    // contribution guidelines
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Provide contribution guidelines",
    },
    // test instructions
    {
        type: "input",
        name: "testInstructions",
        message: "Provide test instructions",
    },
    // license selection
    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: licenses.map(entry => entry.name)
    },
    // github username
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username",
    },
    // email address
    {
        type: "input",
        name: "emailAddress",
        message: "Enter your email address",
    },
];

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    const markdown = generateMarkdown(answers)
    const targetFilename = `${answers.projectTitle}_README.md`
    await writeFile(targetFilename, markdown)
    console.log(`Done! You can find your readme at ${path.join(__dirname, targetFilename)}`)
}

// Function call to initialize app
init();
