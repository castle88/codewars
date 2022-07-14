// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x: any[]) {
  const counts: { numbers: number; strings: number } = x.reduce(
    (acc: number, cur: number | string) => {
      if (typeof cur === "string") {
        acc["strings"] += Number(cur);
      } else {
        acc["numbers"] += cur;
      }
      return acc;
    },
    { numbers: 0, strings: 0 }
  );
  return counts.numbers - counts.strings;
}

console.log(divCon([9, 3, "7", "3"])); // 2
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 13
