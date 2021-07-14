const inquirer = require('inquirer');
const directory = require('inquirer-directory');

inquirer.registerPrompt('directory', directory);

module.exports = (type = 'archive') => {
    inquirer
        .prompt([
            {
                type: 'directory',
                name: 'folder',
                message: `Where would you like to ${type} your files?`,
                basePath: '.'
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers), null, ' ');
        })
}