function correctTail(bod, tail) {
  const check = bod[bod.length - 1] === tail;
  return check;
}

console.log(correctTail("Fox", "x")); //  true
console.log(correctTail("Rhino", "o")); //  true
console.log(correctTail("Meerkat", "t")); //  true
