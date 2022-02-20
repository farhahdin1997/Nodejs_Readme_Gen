// TODO: Include packages needed for this application
'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
inquirer.registerPrompt('recursive', require('./utils/my-inquirer-recursive.js'));
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
