// Space: O(1)
// Time: O(n)

export function solve(nums: number[]): number[] {
  let res = new Array(nums.length).fill(1);

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] *= product;
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }

  return res;
}
