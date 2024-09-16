import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([7, 1, 5, 3, 6, 4]);
  const case2 = solve([7, 6, 4, 3, 1]);

  expect(case1).toBe(5);
  expect(case2).toBe(0);
});
