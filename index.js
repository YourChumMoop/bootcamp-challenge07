import fs from 'fs';
import colors from 'colors';
import inquirer from 'inquirer';

//TODO: Create a fancy splash for the README maker to run at the start
const licenceDict = {
    'Apache 2.0 License' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Creative Commons' : '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    'The MIT License' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'No Licence' : ''
};
const readmeFormater = (unformatted) => {
    return (unformatted.replaceAll(" ","-")).toLowerCase();
};
let splashMessage =
`  
                            |*************************|    
                            |     ~README Builder~    |
                            |                         |
                             ************************* 
    
    `
console.log(colors.magenta(splashMessage));
//TODO: a list of prompts from inquirer...

inquirer
.prompt([
    {
        //TODO: Prompt for Project Title (input)
        type: 'input',
        message: colors.magenta('Please enter the ') + colors.yellow('Title of your Project:'),
        name: 'projectTitle'
    },
    {
        //TODO: Prompt for Decription (input)
        type: 'input',
        message: colors.magenta('Please enter ') +  colors.yellow('Project Description:'),
        name: 'description'
    },
    {
        //TODO: Prompt for Installation (input)
        type: 'input',
        message: colors.magenta('Please enter instructions for ') + colors.yellow('Installation:'),
        name: 'installation'       
    },
    {
        //TODO: Prompt for Usage (input)
        type: 'input',
        message: colors.magenta('Please enter instructions for ') + colors.yellow('Usage:'),
        name: 'usage'      
    },
    {
        //TODO: Prompt for Contributing (input)
        type: 'input',
        message: colors.magenta('Please enter instruction for ') + colors.yellow('Contributing:'),
        name: 'contributing'       
    },
    {
        //TODO: Prompt for Tests (input)
        type: 'input',
        message: colors.magenta('Please add instructions for ') + colors.yellow('Tests:'),
        name: 'tests'     
    },
    {
        //TODO: Prompt for Project Licence (List)
        type: 'list',
        message: colors.magenta('Please choose a ') + colors.yellow('Licence ') + colors.magenta('from the following list:'),
        name: 'licence',
        choices: ["Apache 2.0 License","Creative Commons","The MIT License"]     
    },
    {
        //TODO: Prompt for Github Username (input)
        type: 'input',
        message: colors.magenta('Please enter your ') + colors.yellow('Github Username:'),
        name: 'gitHubUsername'
    },
    {
        //TODO: Prompt for Email (input)
        type: 'input',
        message: colors.magenta('Please enter your ') + colors.yellow('Email Address:'),
        name: 'email'
    }
])
.then((response) => {
    const readmeBuild = `# ${response.projectTitle}

${licenceDict[response.licence]}

## Description
${response.description}

#### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidlines)
* [Tests](#tests)
* [Licence](#licence)
* [Questions](#questions)


## Installation

${response.installation}

[Return to Top](#${readmeFormater(response.projectTitle)})

## Usage

${response.usage}

[Return to Top](#${readmeFormater(response.projectTitle)})

## Contribution Guidlines

${response.contributing}

[Return to Top](#${readmeFormater(response.projectTitle)})

## Tests

${response.tests}

[Return to Top](#${readmeFormater(response.projectTitle)})

## Licence

${licenceDict[response.licence]}
This project is protected by ${response.licence}

[Return to Top](#${readmeFormater(response.projectTitle)})

## Questions

### GitHub
[${response.gitHubUsername}](https://github.com/${response.gitHubUsername.replaceAll(' ','')})
### Email
Please reach out to me with any questions at ${response.email}

[Return to Top](#${readmeFormater(response.projectTitle)})

    `
    fs.writeFile('README.md', readmeBuild, (err) =>
  err ? console.error(err) :console.log(colors.green(response.projectTitle + " README.md complete."))
)
});











