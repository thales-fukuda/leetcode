export function solve(nums: number[], k: number) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;

  for (let j = k; j < nums.length; j++) {
    currSum -= nums[j - k];
    currSum += nums[j];

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum / k;
}
