/**
 * Author: Lantha Wade
 * Date: 11/03/25
 * File Name: index.js
 * Description: Recipe app
 */

// Import your module using require
const { createRecipe, setTimer, quit } = require('./recipes');

// Implement your CLI program
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'create':
    const ingredients = args.slice(1);
    console.log(createRecipe(ingredients));
    break;

  case 'timer':
    const minutes = parseInt(args[1]);
    console.log(setTimer(minutes));
    break;

  case 'quit':
    console.log(quit());
    break;

  default:
    console.log('Usage: node index.js <create|timer|quit> [arguments]');
}
