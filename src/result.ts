import chalk from "chalk";
import { mcq1, mcq2, mcq3, mcq4, mcq5 } from "./quiz.js";
let score: number = 0;
async function counter(a: boolean) {
    if (a == true) {
        console.log(chalk.green.bold(`\nGreat! Your answer is CORRECT.`));
        score++;
    } else {
        console.log(chalk.red.bold(`\nSorry! Your answer is WRONG.`));
    };
    return score;
};
export { counter };