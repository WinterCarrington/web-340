/**
 * Author: Lantha Wade
 * Date: 11/17/25
 * File Name: taco-stand.spec.js
 * Description: Project 4.2
 */
"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
    const stand = new TacoStandEmitter();
    let received = null;

    stand.on("serve", (value) => (received = value));
    stand.serveCustomer("John");

    assert.strictEqual(received, "John");
    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error("Failed testServeCustomer:", err);
    return false;
  }
}

function testPrepareTaco() {
  try {
    const stand = new TacoStandEmitter();
    let received = null;

    stand.on("prepare", (value) => (received = value));
    stand.prepareTaco("beef");

    assert.strictEqual(received, "beef");
    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error("Failed testPrepareTaco:", err);
    return false;
  }
}

function testHandleRush() {
  try {
    const stand = new TacoStandEmitter();
    let received = null;

    stand.on("rush", (value) => (received = value));
    stand.handleRush("lunch");

    assert.strictEqual(received, "lunch");
    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error("Failed testHandleRush:", err);
    return false;
  }
}

// Run tests
testServeCustomer();
testPrepareTaco();
testHandleRush();