"use strict";

function calculateDistance(planet1, planet2) {
  // Calculates the distance between two planets in AU
  // given their distances from the Sun in AU.
  return Math.abs(planet1 - planet2);
}

module.exports = calculateDistance;

