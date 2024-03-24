#! /usr/bin/env node
// SHABANG line

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNumber" },
  { message: "enter second number ", type: "number", name: "SecondNumber" },
  {
    message: "select one of the operator to perform actions",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","remainder"],
  },
]);
// conditional statements
if (answer.operators === "Addition") {
  let Result = answer.FirstNumber + answer.SecondNumber;
  console.log(
    `${answer.FirstNumber}${" + "}${answer.SecondNumber}${" = "}${Result}`
  );
} else if (answer.operators === "Subtraction") {
  let Result = answer.FirstNumber - answer.SecondNumber;
  console.log(
    `${answer.FirstNumber}${" - "}${answer.SecondNumber}${" = "}${Result}`
  );
} else if (answer.operators === "Multiplication") {
  let Result = answer.FirstNumber * answer.SecondNumber;
  console.log(
    `${answer.FirstNumber}${" x "}${answer.SecondNumber}${" = "}${Result}`
  );
} else if(answer.operators === "Division") {
  let Result = answer.FirstNumber / answer.SecondNumber;
  console.log(
    `${answer.FirstNumber}${" / "}${answer.SecondNumber}${" = "}${Result}`
  );
  
}
if (answer.operators === "remainder") {
    let Result = answer.FirstNumber % answer.SecondNumber;
    console.log(
      `${answer.FirstNumber}${" % "}${answer.SecondNumber}${" = "}${Result}`
    );
  }
else {
    console.log("Invalid operator ")
  }
