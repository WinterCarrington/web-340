/**
 * Author: Lantha Wade
 * Date: 11/17/25
 * File Name: taco-stand.js
 * Description: project 4.2
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
