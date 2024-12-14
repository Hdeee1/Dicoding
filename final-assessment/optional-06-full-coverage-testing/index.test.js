import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("calculator sum", () => {
  it("true", () => {
    // arrange
    const sumFirst = 2;
    const sumSecond = 2;

    // action
    const expValue = sum(sumFirst, sumSecond);
    const trueValue = 4;
    assert.equal(expValue, trueValue);
  });

  it("false, if sumFirst is not a number, throw error", () => {
    const throwError = () => {
      // arrange
      const sumFirst = "5";
      const sumSecond = 5;

      // action
      sum(sumFirst, sumSecond);

      // assert
      assert.throws(throwError, Error);
    };
  });

  it("false, if sumSecond is not a number, throw error", () => {
    const throwError = () => {
      // arrange
      const sumFirst = 5;
      const sumSecond = "5";

      // action
      sum(sumFirst, sumSecond);

      // assert
      assert.throws(throwError, Error);
    };
  });
});
