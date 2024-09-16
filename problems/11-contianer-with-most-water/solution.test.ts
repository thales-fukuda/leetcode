import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const case2 = solve([1, 1]);

  expect(case1).toBe(49);
  expect(case2).toBe(1);
});
