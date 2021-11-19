// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

//     x representing fire
//     Y representing buildings.

// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

// Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

// Note: all inputs will be valid.
// Examples

// "xxYxx" and w = 3      -->  2 waterbombs needed
// "xxYxx" and w = 1      -->  4
// "xxxxYxYx" and w = 5   -->  3
// "xxxxxYxYx" and w = 2  -->  5

// Algorithms
// Strings
// Puzzles
// Games



 function waterbombs(fire, w) {
	let answer = []
	for(let i = 0; i < fire.length; i+=w){
		answer.push(fire.slice(i,i+w))
	}
	return answer
}


console.log(waterbombs("xxxxYxYx", 4))		// 3
console.log(waterbombs("xxYxx", 3))		// 2
// small fire
console.log(waterbombs("Y", 4))			// 0
console.log(waterbombs("xx", 1))		// 2
// medium fire
console.log(waterbombs("xxYxx", 3))		// 2
console.log(waterbombs("xxxYx", 1))		// 4
// large fire
console.log(waterbombs("xxxxYxYx", 4))		// 3
console.log(waterbombs("xxxxxYxYx", 2))		// 5