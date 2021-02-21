const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const getNote = require('./notes')
const commandFunction = require("./yargs_command");

commandFunction();

var deneme = yargs.argv[0];