function redistributeWealth(wealth) {
  const avg = wealth.reduce((acc, cur) => (acc += cur), 0) / wealth.length;
  for (key in wealth) {
    wealth[key] = avg;
  }
  return wealth;
}

const wealthEqual = [5, 5, 5, 5, 5]; // already equal
console.log(redistributeWealth(wealthEqual)); // [5,5,5,5,5], "wealth in input array should have been unaffected");

const wealthUnequal = [0, 10]; // unequal
console.log(redistributeWealth(wealthUnequal)); // [5, 5], "wealth in input array should have been redistributed");

const wealthSingle = [5]; // single citizen
console.log(redistributeWealth(wealthSingle)); // [5], "wealth in input array should have been unaffected");

const wealthFloat = [3, 2, 2]; // floating point result
console.log(redistributeWealth(wealthFloat)); // [2.3333333333333335,2.3333333333333335, 2.3333333333333335], "wealth in input array should have been redistributed");
