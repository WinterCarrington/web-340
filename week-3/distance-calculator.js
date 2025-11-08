"use strict";

function calculateDistance(planet1, planet2) {
  // Simple absolute difference between distances from the Sun
  return Math.abs(planet1 - planet2);
}

module.exports = calculateDistance;
