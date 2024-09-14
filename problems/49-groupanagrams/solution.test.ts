import { expect, test } from "bun:test";

import { solve } from "./solution";

test("test", () => {
  const case1 = solve([""]);
  const case2 = solve(["a"]);
  const case3 = solve(["eat", "tea", "tan", "ate", "nat", "bat"]);

  expect(case1).toEqual([[""]]);
  expect(case2).toEqual([["a"]]);
  expect(case3).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});
