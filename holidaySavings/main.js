// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
  let savings = normPrice * (discount * 0.01);
  let totalSavings = 0;
  console.log(savings, totalSavings);
  let bottles = 0;
  while (totalSavings < hol) {
    totalSavings += savings;
    bottles++;
    console.log(totalSavings);
  }
  return bottles - 1;
}

console.log(dutyFree(12, 50, 1000)); // 166
// console.log(dutyFree(17, 10, 500)); // 294
//  console.log(dutyFree(24, 35, 3000)); // 357
