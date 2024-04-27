#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n \t\t Welcome To Word-Counter"));
console.log("=".repeat(50));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",    
    }
]);

let words = answers.sentence.trim().split(" ")
console.log(words);

console.log(`your sentence word counter is ${words.length}`);


