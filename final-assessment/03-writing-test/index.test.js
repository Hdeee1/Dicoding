import { it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

it("correct", () => {
  // arrange
  const firstNumber = 1;
  const secondNumber = 1;

  // action
  const trueResult = sum(firstNumber, secondNumber);

  // assert
  const expectedResult = 2;
  assert.equal(trueResult, expectedResult);
});
