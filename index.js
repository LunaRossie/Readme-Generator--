const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: "username",
            message: 'What is your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'How do you describe your project?'
        },
        {
            type: 'input',
            name: 'instruction',
            message: 'What is the instruction of your project?'
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?'
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?'
        },
        {
            type: 'list',
            name: 'how',
            message: 'How do you cook pasta?',
            choices: ['Boil', 'Saute', 'Bake']
        },
        {
            type: 'list',
            name: 'language',
            message: 'What languages do you know?',
            choices:['French', 'German','JavaSript']
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you prefer?',
            choices:['Apache', 'GPL','MIT']
        }
    ])
    .then (data=>{
        const result = generateReadme (data);
        fs.writeFileSync(".ReadME.md", result)
    })



const Zhunn = {
    first: "Zhunn",
    last: "Altmark",
    Origin: "Cainta",
};

const greeting = `My name is ${Zhunn.first}!
I grew up in ${Zhunn.Cainta}.`;

// console.log(greeting);



