/**
 * Author: Lantha Wade
 * Date: 11/17/25
 * File Name: index.js
 * Description: project 4.2
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./src/tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  // TODO: Handle the commands
  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;

    case "prepare":
      tacoStand.prepareTaco(argument);
      break;

    case "rush":
      tacoStand.handleRush(argument);
      break;

    default:
      console.log(`Unknown command: ${command}`);
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
    this.emit("rush", rush);
  


module.exports = TacoStandEmitter;
