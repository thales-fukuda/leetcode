export function solve(nums: number[], k: number): number {
  let max = 0;
  let curr = 0;
  let swaps = k;
  let j = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      curr++;
    } else {
      if (swaps) {
        swaps--;
        curr++;
      } else {
        while (nums[j]) {
          curr--;
          j++;
        }

        j++;
      }
    }

    max = Math.max(max, curr);
  }

  return max;
}
