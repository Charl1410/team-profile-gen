//main menu questions
//inquirer takes an array of objects as its input 
//function to run main question

const inquirer = require("inquirer");

function starterQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What action would you like to take?',
            name: 'action_choice',
            choices: ['Add an employee', 'Add an engineer', 'Add an intern', 'Add a manager', 'Build team']

        },

    ])
    .then(function(response) {
        if(response.action_choice === 'Add an employee'){
            addEmployee()
       }

       else if(response.action_choice === 'Add an engineer'){
            addEngineer()

       }

       else if(response.action_choice === 'Add an intern'){
            addIntern()

        }

        else if(response.action_choice === 'Add a manager'){
            addManager()

       }

       //else build the team
       else {}

       
     })
}


function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee\s name?',
            name: 'employee_name',
            
        },

        {
            type: 'input',
            message: 'What is the employee\s ID?',
            name: 'employee_id',

        },

        {
            type: 'input',
            message: 'What is the employee\s email?',
            name: 'employee_email',

        },
    ])
    .then(response => {
        console.log(response);
        starterQuestions();

     })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers\s name?',
            name: 'engineer_name',
            
        },

        {
            type: 'input',
            message: 'What is the engineer\s ID?',
            name: 'engineer_id',

        },

        {
            type: 'input',
            message: 'What is the engineer\s email?',
            name: 'engineer_email',

        },

        {
            type: 'input',
            message: 'What is the engineer\s GitHub profile name?',
            name: 'engineer_github',

        },
    ])
    .then(response => {
        console.log(response);
        starterQuestions();
     })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\s name?',
            name: 'intern_name',
            
        },

        {
            type: 'input',
            message: 'What is the engineer\s ID?',
            name: 'intern_id',

        },

        {
            type: 'input',
            message: 'What is the intern\s email?',
            name: 'intern_email',

        },

        {
            type: 'input',
            message: 'What is the intern\s school name?',
            name: 'intern_school',

        },
    ])
    .then(response => {
        console.log(response);
        starterQuestions();

     })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\s name?',
            name: 'manager_name',
            
        },

        {
            type: 'input',
            message: 'What is the manager\s ID?',
            name: 'manager_id',

        },

        {
            type: 'input',
            message: 'What is the manager\s email?',
            name: 'manager_email',

        },

        {
            type: 'input',
            message: 'What is the manager\s office nubmer?',
            name: 'manager_officeNubmer',

        },
    ])
    .then(response => {
        console.log(response);
        starterQuestions();
    })



}

//need to create a function that builds the team page 


module.exports = {starterQuestions, addEmployee, addEngineer, addIntern, addManager}

