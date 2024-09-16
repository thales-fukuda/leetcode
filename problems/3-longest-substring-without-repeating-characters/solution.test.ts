import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve("abcabcbb");
  const case2 = solve("bbbbb");
  const case3 = solve("pwwkew");
  const case4 = solve("abba");

  expect(case1).toBe(3);
  expect(case2).toBe(1);
  expect(case3).toBe(3);
  expect(case4).toBe(2);
});
