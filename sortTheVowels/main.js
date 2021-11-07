// Sort the Vowels!

// In this kata, we want to sort the vowels in a special format.
// Task

// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

//     List all the Vowels on the right side of |
//     List every character except Vowels on the left side of |
//     Return every character in its original case
//     Each line is seperated with \n
//     Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s){
	if(typeof s !== 'string') return ''
	let arr = s.split('')
	return arr.map((x, i) => {
		if(i === arr.length - 1) return x.match(/[aeiou]/gm) ? `|${x}` : `${x}|`
		if(x.match(/[aeiou]/gm)){
			return `|${x}\n`
		}else{
			return `${x}|\n`
		}
	}).join('')
}

console.log(sortVowels('Codewars'))			// 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T'))			// 'R|\n  n|\n  d|\n |\n  T|\n  |e\n  5|\n  T|');
console.log(sortVowels(1337))				// '');
console.log(sortVowels(undefined))			// '');


//  'C|\n  |o\n  d|\n  |e\n  w|\n  |a\n  r|\n  s|', 
//: 'C|\n  |o\n  d|\n  |e\n  w|\n  |a\n  r|\n  s|\n  '