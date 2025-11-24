/**
 * Author: Lantha Wade 
 * Date: 11/24/25
 * File Name: pie.js
 * Description: Pie baking logic with essential ingredients check.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essential = ["flour", "sugar", "butter"];

  for (const item of essential) {
    if (!ingredients.includes(item)) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
    }
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };