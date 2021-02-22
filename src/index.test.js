import { exportAllDeclaration } from "babel-types";
import { showCurrentCoordinates } from "index";
import { describe } from "yargs";

describe("showCurrentCoordinates", () => {
  it("is a function", () => {
    expect(typeof showCurrentCoordinates).toBe("function");
  });
});
