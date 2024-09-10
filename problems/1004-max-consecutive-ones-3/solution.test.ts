import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
  const case2 = solve(
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    3,
  );

  expect(case1).toBe(6);
  expect(case2).toBe(10);
});
