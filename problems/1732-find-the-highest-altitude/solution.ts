export function solve(gain: number[]): number {
  let altitude = 0;
  let highestAltitude = altitude;

  for (let value of gain) {
    altitude += value;
    highestAltitude = Math.max(altitude, highestAltitude);
  }

  return highestAltitude;
}
