/*
 * Space: O(n)
 *  Time: O(n)
 * */

export function solve(nums: number[], k: number): number[] {
  let numsMap = new Map();

  for (let num of nums) {
    const numQty = numsMap.get(num);

    if (numQty) {
      numsMap.set(num, numQty + 1);
    } else {
      numsMap.set(num, 1);
    }
  }

  let buckets = new Array(nums.length).fill([]);

  for (let [key, value] of numsMap) {
    buckets[value - 1] = [...buckets[value - 1], key];
  }

  let res = [];
  let remaining = k;
  let i = buckets.length - 1;

  while (remaining) {
    for (let val of buckets[i]) {
      res.push(val);
      remaining--;
    }
    i--;
  }

  return res;
}
