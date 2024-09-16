// abcabcbb
//
// solution 1:
// - for every charcter verify longest substring without repeats using hashset
//
// Space: O(n)
// Time: O(nˆ2)
//
// solution 2:
// - create a pointer for left and right
// - create max length starting at 0
// - create currLength starting at 0
// - loop throught array until right reaches str length
// - increase currLength
// - for every character check if exist in hashmap
// - if exists, compare currLength to maxLength
//	- then get index from map and move left there
//	- calculate new curr by getting the curr - newLeft - oldLeft
// - if does not exist, set on hashmap with index beight current right
// - return max
//

export function solve(s: string): number {
  if (!s) {
    return 0;
  }

  let left = 0;
  let maxLength = 1;
  let idxMap = new Map();

  for (let right = 0; right < s.length; right++) {
    const idx = idxMap.get(s[right]);
    if (idx !== undefined) {
      while (left < idx + 1) {
        idxMap.delete(s[left]);
        left++;
      }
    }

    idxMap.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
