const { bakePie } = require("../src/pie");

describe("bakePie", () => {

  let exitMock;
  let warnMock;

  beforeEach(() => {
    warnMock = jest.spyOn(console, "warn").mockImplementation(() => {});
    exitMock = jest.spyOn(process, "exit").mockImplementation(() => {});
  });

  afterEach(() => {
    warnMock.mockRestore();
    exitMock.mockRestore();
  });

  test("returns success message when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);

    expect(result).toBe("Successfully baked a apple pie!");
    expect(console.warn).not.toHaveBeenCalled();
    expect(process.exit).not.toHaveBeenCalled();
  });

  test("logs a warning if an essential ingredient is missing", () => {
    bakePie("cherry", ["flour", "butter"]); // sugar missing

    expect(console.warn).toHaveBeenCalledWith(
      "Missing essential ingredient: sugar"
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("exits when multiple essential ingredients are missing", () => {
    bakePie("pumpkin", ["sugar"]); // missing flour & butter

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(process.exit).toHaveBeenCalledWith(1);
  });

});