import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([2, 7, 11, 15], 9);
  const case2 = solve([3, 2, 4], 6);
  const case3 = solve([3, 3], 6);

  expect(case1).toEqual([0, 1]);
  expect(case2).toEqual([1, 2]);
  expect(case3).toEqual([0, 1]);
});
