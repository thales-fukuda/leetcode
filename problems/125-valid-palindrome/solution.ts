export function solve(s: string): boolean {
  const VALID = "abcdefghijklmnopqkrstuvxwyz0123456789";
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const charLeft = s[left].toLowerCase();
    const charRight = s[right].toLowerCase();

    if (!VALID.includes(charLeft)) {
      left++;
    }

    if (!VALID.includes(charRight)) {
      right--;
    }

    if (VALID.includes(charRight) && VALID.includes(charLeft)) {
      if (charLeft !== charRight) {
        return false;
      } else {
        left++;
        right--;
      }
    }
  }

  return true;
}
