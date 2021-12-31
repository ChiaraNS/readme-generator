// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type:'input',
            name: 'description',
            message: 'Write a descritption of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation process',
        },
        {
            type: 'checkbox',
            name: 'technology',
            message: 'What languages were used in the creating of this porject?',
            choices: [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Python',
                'Other',
            ]
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter project usage information',
        },
        {
            type: 'input',
            name: 'cotributing',
            message: 'Enter contributers to this project',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter project test information'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose a license for this project',
            choices: [
                'Apache',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'other',
                'none',
            ]
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = "README.md";
    const answers = await questions();
    const data = generateMarkdown(answers);

    fs.createFile(fileName, data, err => {
        if(err) throw err;
        console.log('Readme created successfully!');
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
    .then(createFile);
}

// Function call to initialize app
init();
