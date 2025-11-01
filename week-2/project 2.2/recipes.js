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
  return 'Recipe created with ingredients:${list};'
}

// Define the setTimer function
function createRecipe(ingredients) {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return "No ingredients provided.";
  }
  const list = ingredients.join(", ");
  return 'Recipe created with ingredients: ${list};'
}
// Define the quit function
function quit() {
    return "Program exited";
    
}
  // TODO: Implement this function
}

// TODO: Export the functions
