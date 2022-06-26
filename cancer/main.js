function cutCancerCells(organism) {
  const surgery = organism.split("");
  const recovery = [];
  surgery.forEach((cell, i) => {
    const nextCell = surgery[i + 1];
    const prevCell = surgery[i - 1];
    if (cell.match(/[A-Z]/) && !cell.match(/C/)) {
      recovery.push(cell);
    }
    if (cell.match(/[a-z]/) && !nextCell?.match(/C/) && !prevCell?.match(/C/)) {
      if (!cell.match(/c/)) {
        recovery.push(cell);
      }
    }
  });
  return recovery.join("");
}

console.log(cutCancerCells("CC")); // ''
console.log(cutCancerCells("CAAC")); // 'AA'
console.log(cutCancerCells("CaaC")); // ''
console.log(cutCancerCells("C")); // ''
console.log(cutCancerCells("acb")); // 'ab'
console.log(cutCancerCells("aCb")); // ''
console.log(cutCancerCells("acCb")); // 'a'
console.log(cutCancerCells("acCcb")); // 'ab'
console.log(cutCancerCells("ab")); // 'ab'
console.log(cutCancerCells("aCZ")); // 'Z'
console.log(cutCancerCells("BCE")); // 'BE'
console.log(cutCancerCells("nce")); // 'ne'
console.log(cutCancerCells("NcE")); // 'NE'
