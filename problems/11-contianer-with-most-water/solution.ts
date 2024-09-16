// Space: O(1)
// Time: O(n)

export function solve(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let res = 0;

  while (left < right) {
    const minSize = Math.min(height[left], height[right]);
    const distance = right - left;

    res = Math.max(minSize * distance, res);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return res;
}
