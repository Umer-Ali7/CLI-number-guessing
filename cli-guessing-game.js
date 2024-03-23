#! /usr/bin/env node 
import inquirer from "inquirer";
// // 1) computer will generate a random number
// // 2) User input for guesing number
// // 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to Number Guessing Game\n");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10?:"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Contratulation! you guessed a right number");
}
else {
    console.log("You guess wrong number");
}
;
