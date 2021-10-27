// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// I think should be in the original description:
// ''For every string x in the first array and for every string y in the second array calculate abs(length(x) − length(y)) and then take the max of these numbers.'' - this is more clear description of what you need to do.


function mxdiflg(a1, a2) {
	let difference = a1.length - a2.length
	let answer = a2.map((x, i) => {
		return a1[i].length - x.length
	})
	return answer
}




console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))	// 13