// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What kind of installation is required for your project to work?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributers for this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests were done?',
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'Add a link to your Github profile for questions.',
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Add your email address to be reached for questions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of lincense would you like to add',
        choices: ['MIT','Apache','Modzilla Public','Boost Software','GNU General Public'],
    },
];

// TODO: Create a function to write README file
function writeToFile(newREADME, data) {
    
    console.log('README generated!')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
