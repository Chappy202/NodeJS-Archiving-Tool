const inquirer = require('inquirer');
const directory = require('inquirer-directory');
const path = require('path');

inquirer.registerPrompt('directory', directory);

module.exports = (type = 'archive', amount = 'Multiple') => {
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
            if (type === 'extract') {
                require('./logic/handleExtraction').initial(path.join(__dirname, '..', `${answers.folder}`), 'folder', amount);
            } else if (type === 'compress') {
                require('./logic/handleCompression').initial(path.join(__dirname, '..', `${answers.folder}`), 'folder', amount);
            }
        })
}