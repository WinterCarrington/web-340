// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName) {
    // TODO: Set the script file path
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    // TODO: Implement this method

    const child = spawn("node", [this.scriptPath]);

    let output = "";
    let errorOutput = "";

    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    child.on("close", (code) => {
      if (code !== 0) {
        return callback(new Error(errorOutput || "Script failed"), null);
      }

      try {
        const parsed = JSON.parse(output);
        callback(null, parsed);
      } catch (err) {
        callback(err, null);
      }
    });
  }
}

module.exports = { GameCharacters };
