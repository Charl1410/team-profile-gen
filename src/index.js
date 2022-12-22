//requiring the inquirer functions 
const {starterQuestions, } =require('./question');
const inquirer = require("inquirer");


//requiring the classes so we can make new instances of them to build team
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//create an empty array to push to existing team members 


//start the questions running 
starterQuestions();




