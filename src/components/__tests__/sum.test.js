import { sum } from "../sum";

test("Test the sum functiion", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
