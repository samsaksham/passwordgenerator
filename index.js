#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createpassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple password Generator')

program
.option('-l, --length <number>',' Length of the password','8')
.option('-s, --save',' Save passwords to password.txt')
.option('-nn, --no-numbers',' Remove Numbers')
.option('-ns, --no-symbols',' Remove Symbols')
.parse()

const { length , save ,numbers , symbols} = program.opts()


//Get generated password 
const generatedPassword = createPassword(length , numbers, symbols)

//save to File
if(save) {
    savePassword(generatedPassword)
}

//copy to clipoard
clipboardy.writeSync(generatedPassword)

//Output generated 
log(chalk.blue('Generated Password : ')+chalk.bold(generatedPassword))

log(chalk.yellow('Password Copied to clipboard'))

