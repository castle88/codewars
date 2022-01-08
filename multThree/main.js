// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return -1 if no such number exists.
// Examples

// 1      => -1
// 25     => -1
// 36     => 36
// 1244   => 12
// 952406 => 9

const prevMultOfThree = (n) => {
  if (n % 3 === 0) {
    return n;
  } else {
    const charArr = String(n).split("");
    console.log(charArr);
    if (charArr.length > 1) {
      const last = charArr.pop();
      const removeLast = Number(charArr.join(""));

      console.log(last);
      console.log(charArr);
      console.log(removeLast);

      return prevMultOfThree(removeLast);
    } else {
      return -1;
    }
  }
};

console.log(prevMultOfThree(36)); // 36
console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(952406)); // 9
console.log(prevMultOfThree(25)); // -1
