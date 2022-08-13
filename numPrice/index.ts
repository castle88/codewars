// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51

// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function (number) {
  if (typeof number !== "number") return "NaN";

  const newNumber = String(number).split(".");
  const dec = Number(newNumber[1]) * 10;
  const decToStr = dec + 1 > 0 ? String(dec).slice(0, 2) : "00";
  const digArr = newNumber[0]
    .split("")
    .reverse()
    .map((digit, index, arr) =>
      index % 3 === 0 &&
      index !== 0 &&
      index !== arr.length &&
      digit.match(/\d/g)
        ? `${digit},`
        : digit
    )
    .reverse()
    .join("");

  return [digArr, decToStr].join(".");
};

console.log(numberToPrice(1500.129)); //   '1,500.12'
console.log(numberToPrice(-5)); //         '-5.00'
console.log(numberToPrice(1000000.5)); //  '1,000,000.50'
console.log(numberToPrice("@")); //        'NaN'
console.log(3 % 3);
