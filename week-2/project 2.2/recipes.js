/**
 * Author: Lantha Wade
 * Date: 11/03/25
 * File Name: recipes.js
 * Description: recipe app
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return "No ingredients provided.";
  }
  const list = ingredients.join(", ");
  return `Recipe created with ingredients: ${list}`;
}

// Define the setTimer function
function setTimer(minutes) {
  if (isNaN(minutes) || minutes <= 0) {
    return "Please enter a valid number of minutes.";
  }
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};
