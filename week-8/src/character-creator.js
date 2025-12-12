"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await)
 * for handling asynchronous operations.
 *
 * (Template preserved exactly as given)
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:
/*
const fs = require('fs').promises;

async function createCharacter(character) {
  // TODO: Implement this function
}

async function getCharacters() {
  // TODO: Implement this function
}
*/

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
// module.exports = { createCharacter, getCharacters }; // For promises


// ---------------------------------------------------------------------------
// ASSIGNMENT IMPLEMENTATION BELOW (Duplex Stream CharacterCreator)
// ---------------------------------------------------------------------------

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, objectMode: true });
    this.buffer = null;
  }

  _write(chunk, encoding, callback) {
    if (!chunk || chunk === "") {
      this.emit("error", new Error("Empty input is not allowed"));
      return callback();
    }

    const { class: charClass, gender, funFact } = chunk;

    this.buffer = `A ${gender} ${charClass} enters the realm. Fun fact: ${funFact}.`;
    callback();
  }

  _read() {
    if (this.buffer) {
      this.push(this.buffer);
      this.buffer = null;
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
