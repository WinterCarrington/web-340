const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  test("returns data from game-characters-data script", (done) => {
    const gc = new GameCharacters("game-characters-data.js");

    gc.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  test("throws an error when script is not found", (done) => {
    const gc = new GameCharacters("does-not-exist.js");

    gc.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });

  test("handles error when script fails", (done) => {
    const gc = new GameCharacters("failing-script.js");

    gc.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(err.message).toContain("Script failed intentionally");
      expect(data).toBeNull();
      done();
    });
  });
});
