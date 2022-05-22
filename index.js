const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

const employees = [// storing the objects created by the prompts
];

function startIndex() {
    addEmployee();
    // make HTML();
}

function addEmployee() {
    inquirer.prompt([
        {
            message: "Enter the team member's name",
            name: 'name'
        },
        {
            message: "Enter the team member's ID",
            name: 'id'
        },
        {
            message: "Enter the team member's email",
            name: 'email'
        },
        {
            type: 'list',
            message: "Enter the team member's role",
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then(function({name, id, email, role}) {
        const empRole = "";
        if(role === 'Manager') {
            createManager(name, id, email, role);
        } else if(role === 'Engineer') {
            createEngineer(name, id, email, role);
        } else {
            createIntern(name, id, email, role);
        }
    })
}


function createManager(name, id, email) {
    inquirer.prompt([
        {
            message: "What is their office number?",
            name: "officeNumber"
        },
        {
            type: 'list',
            message: "Would you like to add another Employee?",
            choices: ['Yes', 'No'],
            name: 'moreEmployee'
        }
    ])
    .then(function({officeNumber, moreEmployees}) {
        const newManager = new Manager(name, id, email, officeNumber);
        addHtml(newManager)
        .then(function() {
           if(moreEmployees === 'Yes') {
                return addEmployee;
            } else {
                finishHtml();
            } 
        })
        
    })
}

function createEngineer(name, id, email) {
    inquirer.prompt([
        {
            message: "What is their Github username?",
            name: "github"
        },
        {
            type: 'list',
            message: "Would you like to add another Employee?",
            choices: ['Yes', 'No'],
            name: 'moreEmployee'
        }
    ])
    .then(function({github, moreEmployees}) {
        const newEngineer = new Engineer(name, id, email, github);
        addHtml(newEngineer)
        .then(function() {
            if(moreEmployees === 'Yes') {
                 return addEmployee;
             } else {
                 finishHtml();
             } 
         })
    })
}

function createIntern(name, id, email) {
    inquirer.prompt([
        {
            message: "Where did they go to school?",
            name: "school"
        },
        {
            type: 'list',
            message: "Would you like to add another Employee?",
            choices: ['Yes', 'No'],
            name: 'moreEmployee'
        }
    ])
    .then(function({school, moreEmployees}) {
        const newIntern = new Intern(name, id, email, school);
        addHtml(newIntern)
        .then(function() {
            if(moreEmployees === 'Yes') {
                 return addEmployee;
             } else {
                 finishHtml();
             } 
         })
    })
}

startIndex();