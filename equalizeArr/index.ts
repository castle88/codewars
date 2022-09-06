// No description!!!

// Input :: [10,20,25,0]

// Output :: ["+0", "+10", "+15", "-10"]

// Show some love, rank and upvote!
// Fundamentals
// Puzzles
// Arrays

function equalize(array: number[]): string[] {
  if (!array[0]) return [];
  const equalizer = array[0];
  const answer = array.map(
    (num) => `${num - equalizer > 0 ? "+" : ""}${num - equalizer}`
  );

  return answer;
}

console.log(equalize([20, 30, 35, 10])); // (["+0","+10","+15","-10"])
console.log(equalize([])); // ([])
console.log(equalize([10, 12, 24, 50, 0, 15, 20])); // (["+0","+2","+14","+40","-10","+5","+10"])
