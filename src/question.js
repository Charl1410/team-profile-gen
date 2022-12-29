//main menu questions
//inquirer takes an array of objects as its input 
//function to run main question
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const inquirer = require("inquirer");
const {buildTeam} = require('./pageBuilder')

//created an empty array to push new entry data into 
const managerArray = [];
const employeeArray = [];
const internArray = [];
const engineerArray = [];

function starterQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What action would you like to take?',
            name: 'action_choice',
            choices: ['Add an employee', 'Add an engineer', 'Add an intern', 'Add a manager', 'Build team']

        },

    ])
    //checking each response and running add specific function based on selection from main menu questions
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
       else buildTeam(managerArray, engineerArray, internArray);


       
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
        //creating a new instance of employee using the base class and putting in the response data into the parameters 
        const employee = new Employee(response.employee_id, response.employee_name, response.employee_email);
        //pusing the new onject into an empty array
        employeeArray.push(employee);

        console.log(JSON.stringify(employeeArray));

        //calling main menu questions at end of each selection 
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

        const engineer = new Engineer(response.engineer_id, response.engineer_name, response.engineer_email, response.engineer_github);

        engineerArray.push(engineer);

        console.log(JSON.stringify(engineerArray));

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

        const intern = new Intern(response.intern_id, response.intern_name, response.intern_email, response.intern_school);

        internArray.push(intern);

        console.log(JSON.stringify(internArray));
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

        const manager = new Manager(response.manager_id, response.manager_name, response.manager_email, response.manager_officeNubmer);

        managerArray.push(manager);

        console.log(JSON.stringify(managerArray));

        starterQuestions();
    })
}





module.exports = {starterQuestions, addEmployee, addEngineer, addIntern, addManager}