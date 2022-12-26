const fs = require('fs');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
//const path = require('../template/index.html')

//function that will generate the HTML content and take the inquirer information 
function buildTeam(managers, engineers, interns) {

    //open the template HTML file 
    let html = fs.readFileSync('../template/index.html', 'utf-8');
    console.log(html + 'consoled html filesync')
    if (html)
    {
        //creating empty template for content
        let managerHTML = '';
        managers.forEach(manager =>{
            managerHTML +=
             `<div class="card">
                <div class="card-header>
                    <h2> ${manager.manager_name} </h2>
                    <p>Employee ID: ${manager.manager_id}</p>
                    <p>Email: <a href="${manager.manager_email}></p>
                    <p>Office Number: ${manager.manager_officeNumber}</p>
                </div>
            </div>
            `;
        })

        let engineerHTML = '';
        engineers.forEach(engineer =>{
            engineerHTML +=
             `<div class="card">
                <div class="card-header>
                    <h2> ${engineer.engineer_name} </h2>
                    <p>Employee ID: ${engineer.engineer_id}</p>
                    <p>Email: <a href="${engineer.engineer_email}></p>
                    <p>GitHub profile : <a href = "https://github.com/${engineer.engineer_github}></p>
                </div>
            </div>
            `;

        })

    let internHTML = '';
        interns.forEach(intern =>{
            internHTML +=
             `<div class="card">
                <div class="card-header>
                    <h2> ${intern.intern_name} </h2>
                    <p>Employee ID: ${intern.intern_id}</p>
                    <p>Email: <a href="${intern.intern_email}></p>
                    <p>School: ${intern.intern_school}</p>
                </div>
            </div>
            `;

})

//replacing the placeholders in the template for the new generated HTML
html = html.replace('<!---Manager--->', managerHTML);
html = html.replace('<!---Engineer--->', engineerHTML);
html = html.replace(' <!---Intern--->', internHTML);

fs.writeFileSync('./dist/team.html', html, 'utf-8');

console.log('Team has been successfully built!')

    }}


module.exports = {buildTeam}