/*
 * Space: O(n)
 * Time: O(n)
 */

export function solve(nums: number[]): boolean {
  let numsSet = new Set();

  for (let num of nums) {
    if (numsSet.has(num)) {
      return true;
    }

    numsSet.add(num);
  }

  return false;
}
