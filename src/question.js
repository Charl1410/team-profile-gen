//main menu questions
//inquirer takes an array of objects as its input 
//function to run main question

const { default: inquirer } = require("inquirer")

function starterQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What action would you like to take?',
            name: 'action_choice',
            choices: ['Add an employee', 'Add an engineer', 'Add an intern', 'Add a manager', 'Build team']

        },

    ])
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the employee\s name?',
            name: '',
            choices: ['Add an employee', 'Add an engineer', 'Add an intern', 'Add a manager', 'Build team']



        }
    ])
}

