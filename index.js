const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: "username",
            message: 'What is your github username'
        }
        {
            type: 'input',
            name: 'zhunn_cute@yahoo.com',
            message: 'What is your email address?'
        }
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?'
        }
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?'
        }
        {
            type: 'list',
            name: 'how',
            message: 'How do you cook pasta?'
            choices: ['Boil', 'Saute', 'Bake']
        }
        {
            type: 'list',
            name: 'language',
            message: 'What languages do you know?'
            choices:['French', 'German','JavaSript']
        }
    )

    .then(answers => {
        console.log({answers });
        const {username, email, hobby, food, pasta, language} = answers;
        const currentPerson = new Person (username, email, hobby, food, pasta, language);
        console.log(currentPerson);

        const htmlPageContent = currentPerson.generateHTML();

        fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log ('Created index.html')
        );
    }
);


const Zhunn = {
    first: "Zhunn",
    last: "Altmark",
    Origin: "Cainta",
};

const greeting = `My name is ${Zhunn.first}!
I grew up in ${Zhunn.Cainta}.`;

console.log(greeting);



