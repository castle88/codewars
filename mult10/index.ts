// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37

// Expected output:

// 20
// 30
// 40

const closestMultiple10 = (num: number): number => {
  const diff: number = 10 - Number(String(num)[String(num).length - 1]);
  return diff <= 5 ? num + diff : num - (10 - diff);
};

console.log(closestMultiple10(22)); // 20
console.log(closestMultiple10(25)); // 30
console.log(closestMultiple10(37)); // 40
