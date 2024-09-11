import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([-5, 1, 5, 0, -7]);
  const case2 = solve([-4, -3, -2, -1, 4, 3, 2]);

  expect(case1).toBe(1);
  expect(case2).toBe(0);
});
