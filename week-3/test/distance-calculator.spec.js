"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testDistanceBetweenEarthAndMars() {
  const result = calculateDistance(1.0, 1.52);
  assert.strictEqual(result, 0.52, "Earth–Mars distance should be 0.52 AU");
  console.log("✔ testDistanceBetweenEarthAndMars passed");
}

function testDistanceBetweenVenusAndMercury() {
  const result = calculateDistance(0.72, 0.39);
  assert.strictEqual(result, 0.33, "Venus–Mercury distance should be 0.33 AU");
  console.log("✔ testDistanceBetweenVenusAndMercury passed");
}

function testDistanceSamePlanet() {
  const result = calculateDistance(5.2, 5.2);
  assert.strictEqual(result, 0, "Distance between the same planet should be 0 AU");
  console.log("✔ testDistanceSamePlanet passed");
}

// Call your test functions here
testDistanceBetweenEarthAndMars();
testDistanceBetweenVenusAndMercury();
testDistanceSamePlanet();
