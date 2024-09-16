import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve("A man, a plan, a canal: Panama");
  const case2 = solve("race a car");

  expect(case1).toBe(true);
  expect(case2).toBe(false);
});
