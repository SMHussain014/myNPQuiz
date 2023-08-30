import chalk from "chalk";
let score = 0;
async function counter(a) {
    if (a == true) {
        console.log(chalk.green.bold(`\nGreat! Your answer is CORRECT.`));
        score++;
    }
    else {
        console.log(chalk.red.bold(`\nSorry! Your answer is WRONG.`));
    }
    ;
    return score;
}
;
export { counter };
