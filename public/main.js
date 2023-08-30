import showBanner from "node-banner";
import chalk from "chalk";
async function show() {
    await showBanner('Quiz', 'Please select a correct answer from the given choices.');
}
;
await show();
// import {showBanner} from "./test.cjs";
// showBanner('Quiz', 'Please select a correct answer from the given choices.');
import { mcq1, mcq2, mcq3, mcq4, mcq5 } from "./quiz.js";
import { counter } from "./result.js";
let ans1 = await mcq1();
let s1 = await counter(ans1);
console.log(chalk.bgGray.bold(`Your current score is: ${s1}.`));
let ans2 = await mcq2();
let s2 = await counter(ans2);
console.log(chalk.bgGray.bold(`Your current score is: ${s2}.`));
let ans3 = await mcq3();
let s3 = await counter(ans3);
console.log(chalk.bgGray.bold(`Your current score is: ${s3}.`));
let ans4 = await mcq4();
let s4 = await counter(ans4);
console.log(chalk.bgGray.bold(`Your current score is: ${s4}.`));
let ans5 = await mcq5();
let s5 = await counter(ans5);
console.log(chalk.bgCyan.blackBright.bold(`\nYour final score is: ${s5} points.`));
