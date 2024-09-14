/*
 * Space: O(n)
 * Time: O(n)
 */

export function solve(nums: number[], target: number): number[] {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const value = target - nums[i];
    const valueIndex = numsMap.get(value);

    if (valueIndex !== undefined) {
      console.log(valueIndex, i);
      return [valueIndex, i];
    }

    numsMap.set(nums[i], i);
  }

  return [];
}
