const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require(',/generateMarkdown.js');

const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: "username",
            message: 'What is your github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter your project name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'description',
            message: 'How do you describe your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instruction',
            message: 'What is the instruction of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter the instruction of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps to install your project?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('enter steps to install your project!');
                return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'language',
            message: 'What languages do you know?',
            choices:['French', 'German','JavaSript'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('choose a language you know!');
                    return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you prefer?',
            choices:['Apache', 'GPL','MIT'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('choose a license!');
                    return false; 
                }
            }
        }
    ])
    .then (data=>{
        const result = generateReadme (data);
        fs.writeFileSync(".ReadME.md", result)
    })

    const writeFile = data => {
        fs.writeFile('README.md', data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Your README has been successfully created!")
            }
        })
    }; 

    questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })

// const Zhunn = {
//     first: "Zhunn",
//     last: "Altmark",
//     Origin: "Cainta",
// };

// const greeting = `My name is ${Zhunn.first}!
// I grew up in ${Zhunn.Cainta}.`;


