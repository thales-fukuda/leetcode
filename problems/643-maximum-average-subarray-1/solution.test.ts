import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 12, -5, -6, 50, 3], 4);
  const case2 = solve([5], 1);
  const case3 = solve([0, 4, 0, 3, 2], 1);

  expect(case1).toBe(12.75);
  expect(case2).toBe(5.0);
  expect(case3).toBe(4);
});
