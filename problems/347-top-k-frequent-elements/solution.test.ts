import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 1, 1, 2, 2, 3], 2);
  const case2 = solve([1], 1);
  const case3 = solve([1, 2], 2);

  expect(case1).toEqual([1, 2]);
  expect(case2).toEqual([1]);
  expect(case3).toEqual([1, 2]);
});
