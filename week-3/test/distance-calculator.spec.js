"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// Test: Distance between Earth and Mars
function testEarthToMars() {
  try {
    const result = calculateDistance(1.0, 1.52);
    assert.strictEqual(result, 0.52);
    console.log("✔ testEarthToMars passed");
    return true;
  } catch (error) {
    console.error(`✖ Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test: Distance between Venus and Mercury
function testVenusToMercury() {
  try {
    const result = calculateDistance(0.72, 0.39);
    assert.strictEqual(result, 0.33);
    console.log("✔ testVenusToMercury passed");
    return true;
  } catch (error) {
    console.error(`✖ Failed testVenusToMercury: ${error.message}`);
    return false;
  }
}

// Test: Distance between the same planet
function testSamePlanetDistance() {
  try {
    const result = calculateDistance(5.2, 5.2);
    assert.strictEqual(result, 0);
    console.log("✔ testSamePlanetDistance passed");
    return true;
  } catch (error) {
    console.error(`✖ Failed testSamePlanetDistance: ${error.message}`);
    return false;
  }
}

// Call all test functions
testEarthToMars();
testVenusToMercury();
testSamePlanetDistance();