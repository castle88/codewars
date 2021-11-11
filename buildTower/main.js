// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

//     Python: return a list;
//     JavaScript: returns an Array;
//     C#: returns a string[];
//     PHP: returns an array;
//     C++: returns a vector<string>;
//     Haskell: returns a [String];
//     Ruby: returns an Array;
//     Lua: returns a Table;

// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]


function towerBuilder(nFloors) {
	let bottomFloor = []
	for(let i = 0; i < nFloors * 2 -1; i++){
		bottomFloor.push('*')
	}
	let floorChanger = bottomFloor.join('')
	let tower = [bottomFloor.join('')]
	 for(let j = 1; j < nFloors; j++){
		floorChanger = floorChanger.replace(floorChanger.charAt(j-1), ' ')
		floorChanger = floorChanger.replace(floorChanger.charAt(j), '')
		tower.unshift(floorChanger += ' ')
	}
	return tower
}

console.log(towerBuilder(1))		// ["*"]
console.log(towerBuilder(2))		// [" * ","***"]
console.log(towerBuilder(3))		// ["  *  "," *** ","*****"]