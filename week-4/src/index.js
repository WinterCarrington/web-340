/**
 * Author: Lantha Wade
 * Date: 11/17/25
 * File Name: taco-stand.js
 * Description: project 4.2
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter
class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;