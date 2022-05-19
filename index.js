const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "LunaRossie",
            message: "What is your github username"
        }
    ])
    .then(LunaRossie => {
        console.log({ LunaRossie });
    })
    .catch(errors => {
        console.log({ errors });
    })

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "zhunn_cute@yahoo.com",
            message: "What is your email address?"
        }
    ])
    .then(answers) =>{
        console.log(answers);
})

    .catch(errors =>{
    console.log ({errors});
})

const Zhunn = {
    first: "Zhunn",
    last: "Altmark",
    Origin: "Cainta",
};

const greeting = `My name is ${Zhunn.first}!
I grew up in ${Zhunn.Cainta}.`;

console.log(greeting);



