#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-Fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "please enter your amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const diffTime = differenceInSeconds(intervalTime, currTime);
        if (diffTime <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((diffTime % (3600 * 24)) / 3600);
        const sec = Math.floor(diffTime % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
