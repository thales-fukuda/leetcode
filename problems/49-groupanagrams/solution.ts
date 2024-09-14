// Space: O(n)
// Time: O(m * nlogn)

export function solve(strs: string[]): string[][] {
  let anagramMap = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    const anagrams = anagramMap.get(sortedStr);

    if (anagrams) {
      anagramMap.set(sortedStr, [...anagrams, str]);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  let result = [];

  for (let [_, value] of anagramMap) {
    if (value) {
      result.push(value);
    } else {
      result.push([""]);
    }
  }

  return result;
}
