'use strict';
require('dotenv').config();

/*
  > Modules
*/
// Libraries
const inquirer = require('inquirer');

// Utils
const initialMessage = require('./util/initialMessage');

/*
  > Application
*/
// Initial display message when app is started
initialMessage();

// Initial Question and logic (The question interaction does not work with the nodemon dev script)
inquirer
    .prompt([{
        type: 'list',
        name: 'action',
        message: `Would you like to 'Compress Folders' or 'Extract Files'?`,
        choices: [
            'Compress Folders',
            'Extract Files'
        ],
    }])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, ' '));
    })