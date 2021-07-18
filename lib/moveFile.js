const fs = require('fs-extra');
const chalk = require('chalk');

module.exports = (oldPath, newPath) => {
    fs.move(oldPath, newPath)
        .catch(err => {
            console.log(chalk.red('Something went wrong while trying '))
        })
}