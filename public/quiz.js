import inquirer from "inquirer";
import chalk from "chalk";
async function mcq1() {
    const answer1 = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "\nQ1: When did Pakistan come into existence?\n",
        choices: ["Aug 14, 1947", "Mar 23, 1947", "Aug 15, 1947", "Dec 25, 1947"]
    });
    if (answer1.question1 == "Aug 14, 1947") {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer1.question1}.`));
        return true;
    }
    else {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer1.question1}.`));
        return false;
    }
    ;
}
;
async function mcq2() {
    const answer2 = await inquirer.prompt({
        name: "question2",
        type: "list",
        message: "\nQ2: Who is the founder of Pakistan?\n",
        choices: ["Allama Muhammad Iqbal", "Sir Syed Ahmed Khan", "Quaid-e-Azam", "Ch. Renmat Ali"]
    });
    if (answer2.question2 == "Quaid-e-Azam") {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer2.question2}.`));
        return true;
    }
    else {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer2.question2}.`));
        return false;
    }
    ;
}
;
async function mcq3() {
    const answer3 = await inquirer.prompt({
        name: "question3",
        type: "list",
        message: "\nQ3: Which is not a output device?\n",
        choices: ["Monitor", "Key Board", "Printer", "Speaker"]
    });
    if (answer3.question3 == "Key Board") {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer3.question3}.`));
        return true;
    }
    else {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer3.question3}.`));
        return false;
    }
    ;
}
;
async function mcq4() {
    const answer4 = await inquirer.prompt({
        name: "question4",
        type: "list",
        message: "\nQ4: Which is the most spoken language of World?\n",
        choices: ["Hindi", "French", "Urdu", "English"]
    });
    if (answer4.question4 == "English") {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer4.question4}.`));
        return true;
    }
    else {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer4.question4}.`));
        return false;
    }
    ;
}
;
async function mcq5() {
    const answer5 = await inquirer.prompt({
        name: "question5",
        type: "list",
        message: "\nQ5: Which is not a Programming Language?\n",
        choices: ["Python", "NodeJs", "C++", "JavaScript"]
    });
    if (answer5.question5 == "NodeJs") {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer5.question5}.`));
        return true;
    }
    else {
        console.log(chalk.bgBlue.bold(`Your answer is: ${answer5.question5}.`));
        return false;
    }
    ;
}
;
export { mcq1, mcq2, mcq3, mcq4, mcq5 };
