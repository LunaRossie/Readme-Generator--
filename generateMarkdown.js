const generateMarkdown = Data => {
    return `#{data.title}

    ## Description 
    ${data.description}

    ## Table of Contents
    * [Description] (#Description)
    * [Instruction] (#Instruction)
    * [Github] (#Github)
    * [email address] (#email address)
    * [Video Link] (#Video Link)
    * [Language] (#Language)
    * [License] (#License)
    * [Questions] (#Questions)
    
    ## Description
    ${data.install}

    ## Instruction
    ${data.install}

    ## Github
    ${data.install}

    ## email address
    ${data.install}

    ## Video Link
    ${data.install}

    ## Language
    ${data.install}

    ## License
    ${data.install}

    ## Questions
    If you have any questions regarding this READme, please reach out directly at ${data.email} or via Github "https://github.com/LunaRossie/Readme-Generator--".
`;
}

module.exports = generateMarkdown;




// function renderLicenseBadge(license){
//     const badges = {
//         ISC: '![License: MIT](https://github.com/LunaRossie/Readme-Generator--/issues)',
//     }
//     return badges [license]
// {
// function generateReadme(answers)
//     return `# ${answers.title}
// }
