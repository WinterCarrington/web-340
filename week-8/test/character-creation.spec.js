const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator Stream", () => {

  test("processes data correctly when written to", (done) => {
    const creator = new CharacterCreator();

    creator.write({
      class: "Warrior",
      gender: "Male",
      funFact: "Collects enchanted swords"
    });

    creator.end();

    creator.on("data", (data) => {
      expect(data).toContain("Male Warrior");
      done();
    });
  });

  test("emits an error when empty string is written", (done) => {
    const creator = new CharacterCreator();

    creator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Empty input is not allowed");
      done();
    });

    creator.write("");
  });

  test("transforms data into correct formatted output", (done) => {
    const creator = new CharacterCreator();

    const input = {
      class: "Mage",
      gender: "Other",
      funFact: "Knows 73 magical languages"
    };

    creator.write(input);
    creator.end();

    creator.on("data", (result) => {
      expect(result)
        .toBe("A Other Mage enters the realm. Fun fact: Knows 73 magical languages.");
      done();
    });
  });

});
