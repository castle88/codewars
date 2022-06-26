function solution(S) {
  const maxLengths = Math.max(
    ...[
      Math.max(...S.split("b").map((el) => el.length)),
      Math.max(...S.split("a").map((el) => el.length)),
    ]
  );
  return maxLengths;
}

console.log(solution("babaa"));
console.log(solution("bbbab"));
