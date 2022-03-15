// Given a list of integers, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numbers = Array.from(arguments);
  const newNumbers = numbers
    .map((number) => String(number).split(""))
    .reduce((acc, cur) => {
      return [...acc, ...cur];
    }, []);

  return digits.filter((digit) => !newNumbers.includes(digit)).join("");
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"
