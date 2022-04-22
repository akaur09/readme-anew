// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require ("inquirer");
const genMrkDwn = require ("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Describe your project.",
    "What kind of installation is required for your project to work?",
    "What is the use of this project?",
    "Who are the contributers for this project?",
    "What tests were done?",
    "Add a link to your Github profile for questions.",
    "Add your email address to be reached for questions?",
    "What kind of lincense would you like to add",
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contribution',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'questions1',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'question2',
                message: questions[7],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[8],
                choices: ['MIT','Apache','Modzilla','Boost','GNU','None'],
            },
        ])
        .then (answers =>{
            console.log(answers);
            writeToFile("newREADME.md", genMrkDwn(answers));
        })   
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('newREADME.md',data, (err)=>{
        err ? console.log(err): console.log('README successfully created')
    });
}

// Function call to initialize app
init();
