import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 2, 3, 4]);
  const case2 = solve([-1, 1, 0, -3, 3]);

  expect(case1).toEqual([24, 12, 8, 6]);
  expect(JSON.parse(JSON.stringify(case2))).toEqual([0, 0, 9, 0, 0]);
});
