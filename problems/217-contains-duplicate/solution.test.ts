import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([1, 2, 3, 1]);
  const case2 = solve([1, 2, 3, 4]);

  expect(case1).toBe(true);
  expect(case2).toBe(false);
});
