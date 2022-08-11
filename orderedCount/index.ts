// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text: string): (string | number)[] {
  const count = text.split("").reduce((acc: any, cur: string) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const sorted: string | (string | number)[][] = [];

  for (const key in count) {
    sorted.push([key, count[key]]);
  }

  return sorted.sort((a, b) => a[1] - b[1]);
};

const examples = [
  [
    "abracadabra",
    [
      ["a", 5],
      ["b", 2],
      ["r", 2],
      ["c", 1],
      ["d", 1],
    ],
  ],
  [
    "Code Wars",
    [
      ["C", 1],
      ["o", 1],
      ["d", 1],
      ["e", 1],
      [" ", 1],
      ["W", 1],
      ["a", 1],
      ["r", 1],
      ["s", 1],
    ],
  ],
  [
    "233312",
    [
      ["2", 2],
      ["3", 3],
      ["1", 1],
    ],
  ],
];

examples.forEach((example) => {
  console.log(orderedCount(example[0]), example[1]);
});
