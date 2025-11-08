"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// Test: Distance between Earth and Mars
function testEarthToMars() {
  const result = calculateDistance(1.0, 1.52);
  assert.strictEqual(result, 0.52, "Earth–Mars distance should be 0.52 AU");
  console.log("✔ testEarthToMars passed");
}

// Test: Distance between Venus and Mercury
function testVenusToMercury() {
  const result = calculateDistance(0.72, 0.39);
  assert.strictEqual(result, 0.33, "Venus–Mercury distance should be 0.33 AU");
  console.log("✔ testVenusToMercury passed");
}

// Test: Distance between the same planet
function testSamePlanetDistance() {
  const result = calculateDistance(5.2, 5.2);
  assert.strictEqual(
    result,
    0,
    "Distance between the same planet should be 0 AU"
  );
  console.log("✔ testSamePlanetDistance passed");
}

// Call all test functions
testEarthToMars();
testVenusToMercury();
testSamePlanetDistance();
