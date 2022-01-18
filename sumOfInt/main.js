// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  return s.split(/\D/).reduce((acc, cur) => (acc += Number(cur)), 0);
}

let = exampleTests = [
  ["12.4", 16],
  ["h3ll0w0rld", 3],
  ["2 + 3 = ", 5],
  [
    "Our company made approximately 1 million in gross revenue last quarter.",
    1,
  ],
  ["The Great Depression lasted from 1929 to 1939.", 3868],
  ["Dogs are our best friends.", 0],
  ["C4t5 are 4m4z1ng.", 18],
  ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635],
];

console.log(sumOfIntegersInString(exampleTests[0][0])); // 16
console.log(sumOfIntegersInString(exampleTests[1][0])); // 3
console.log(sumOfIntegersInString(exampleTests[2][0])); // 5
console.log(sumOfIntegersInString(exampleTests[3][0])); // 1
console.log(sumOfIntegersInString(exampleTests[4][0])); // 3868
console.log(sumOfIntegersInString(exampleTests[5][0])); // 0
console.log(sumOfIntegersInString(exampleTests[6][0])); // 18
console.log(sumOfIntegersInString(exampleTests[7][0])); // 3635
