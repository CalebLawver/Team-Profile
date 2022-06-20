const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

const employees = [// storing the objects created by the prompts
];

function startIndex() {
    addEmployee();
    beginHtml();
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
            choices: ['Manager', 'Engineer', 'Intern', ]
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
    .then(function({officeNumber, moreEmployee}) {
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager);
        addHtml(newManager)
        
           if(moreEmployee === 'Yes') {
                addEmployee();
            } else {
                finishHtml();
            } 
        
        
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
            choices: ['yes', 'No'],
            name: 'moreEmployee'
        }
    ])
    .then(function({github, moreEmployee}) {
        const newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer);
        addHtml(newEngineer)
        
            if(moreEmployee === 'Yes') {
                addEmployee();
             } else {
                finishHtml();
             } 
        
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
    .then(function({school, moreEmployee}) {
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
        addHtml(newIntern)
        
            if(moreEmployee === 'Yes') {
                addEmployee();
             } else {
                finishHtml();
             } 
        
    })
}

function beginHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile('./dist/team.html', html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function addHtml(employee) {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();

    let html = '';

    if (role === 'Engineer') {
        const github = employee.getGithub();
        html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${github}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === 'Manager') {
        const officeNumber = employee.getOfficeNumber();
        html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${officeNumber}</li>
        </ul>
        </div>
    </div>`;
    } else {
        const school = employee.getSchool();
        html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${school}</li>
        </ul>
        </div>
    </div>`
    }

    fs.appendFile('./dist/team.html', html, function(err) {
        if (err) {
            console.log(err);
            return;
        }
    })
}

function finishHtml() {
    console.log('File has been created');
    const html = `</div>
    </div>
</body>
</html>`
}

// need to add beginning HTML, then add a function to add each member. 

startIndex();