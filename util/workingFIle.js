const inquirer = require('inquirer');
const fileTree = require('inquirer-file-tree-selection-prompt');
const path = require('path');

inquirer.registerPrompt('file-tree-selection', fileTree);

module.exports = (type = 'archive', amount = 'Multiple') => {
    inquirer
        .prompt([
            {
                type: 'file-tree-selection',
                name: 'file',
                message: `What file would you like to ${type}?`,
                basePath: '.'
            }
        ])
        .then(answers => {
            require('./logic/handleExtraction').initial(path.join(__dirname, '../'), answers.file);
        })
}