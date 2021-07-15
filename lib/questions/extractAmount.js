const inquirer = require('inquirer');

module.exports = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'action',
            message: `Do you want to extract a single, or multiple files?`,
            choices: [
                'Single',
                'Multiple'
            ],
        }])
        .then((answers) => {
            // Call functions which handles the different choice types here
            console.log(JSON.stringify(answers, null, ' '));
            if (answers.action === 'Single') {

            } else {

            }
        });
}