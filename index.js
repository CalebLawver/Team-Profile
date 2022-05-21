const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

const employees = [// storing the objects created by the prompts
];

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
        message: "Enter the team member's role",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    }
])
.then(function({name, id, email, role}) {
    const empRole = "";
    if(role === 'Manager') {
        createManager();
    } else if(role === 'Engineer') {
        createEngineer();
    } else {
        createIntern();
    }
})

function createManager(name, id, email, role) {
    inquirer.prompt([
        {
            message: "What is their office number?",
            name: "Office number"
        }
    ])
    .then(function({officeNumber, moreEmployees}) {
        const newManager = new Manager(name, id, email, role, officeNumber);
        console.log(newManager);
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            message: "What is their Github username?",
            name: "Github"
        }
    ])
}

function createIntern() {
    inquirer.prompt([
        {
            message: "Where did they go to school?",
            name: "School"
        }
    ])
}