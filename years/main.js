// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
// Examples:

// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function (date1, date2) {
  const year1 = date1.split("/")[0];
  const year2 = date2.split("/")[0];
  console.log(year1);

  return Math.abs(year1 - year2);
};

console.log(howManyYears("1997/10/10", "2015/10/10")); // 18
console.log(howManyYears("1990/10/10", "2015/10/10")); // 25
console.log(howManyYears("2015/10/10", "1990/10/10")); // 25
console.log(howManyYears("1992/10/24", "2015/10/24")); // 23
console.log(howManyYears("2018/10/10", "2000/10/10")); // 18
