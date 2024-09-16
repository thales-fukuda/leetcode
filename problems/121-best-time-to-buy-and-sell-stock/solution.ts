export function solve(prices: number[]): number {
  let profit = 0;

  let pointer = 0;

  for (let i = 1; i < prices.length; i++) {
    const currProfit = prices[i] - prices[pointer];

    profit = Math.max(currProfit, profit);

    if (prices[i] < prices[pointer]) {
      pointer = i;
    }
  }
  return profit;
}
