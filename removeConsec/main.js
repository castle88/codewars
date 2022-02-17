// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

const removeConsecutiveDuplicates = (s) => {
  const wordArr = s.split(" ");
  const answer = [];
  wordArr.forEach((x) => {
    if (answer[answer.length - 1] !== x) {
      answer.push(x);
    }
  });

  return answer.join(" ");
};
// your perfect code...

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // 'alpha beta gamma delta alpha beta gamma delta'
