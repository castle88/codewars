// You will be given an array and a single item from that array. The smallest value in array has the highest kyu - 1st kyu, 2nd smallest - 2nd kyu and so on. There are 8 kyus and each one has limited spots:

//  1st kyu - 1 slot
//  2nd kyu - 2 slots
//  3rd kyu - 2 slots
//  4th kyu - 3 slots
//  5th kyu - 3 slots
//  6th kyu - 3 slots
//  7th kyu - 4 slots
//  8th kyu - 4 slots

// You should return kyu for the value passed based on the array. If value isn't low enough to get a kyu then return 0.

// Examples:

// ([66,12,90,15], 15) => 2
// ([1,7,2,3,4,5], 1) => 1
// ([1,7,2,3,4,5,9,10], 7) => 4

function getKyu(allHonors, honor){
	console.log(`${allHonors} -- ${honor}`)
	let sorted = allHonors.sort((a,b) => a-b)
	let sliced = sorted.filter(x => x <= honor)
	switch(sliced.indexOf(honor)+1){
		case 1:
			return 1
			break;
		case 2:
			return 2
			break;
		case 3: 
			return 2
			break;
		case 4:
			return 3
			break;
		case 5:
			return 3
			break;
		case 6:
			return 4
			break;
		case 7:
			return 4
			break;
		case 8:
			return 4
			break;
		case 9: 
			return 5
			break;
		case 10:
			return 5
			break;
		case 11:
			return 5
			break;
		case 12:
			return 6
			break;
		case 13:
			return 6
			break;
		case 14:
			return 6
			break;
		case 15:
			return 4
			break;
		case 16:
			return 4
			break;
		case 17:
			return 4
			break;
		case 18:
			return 4
			break;
		case 19:
			return 5
			break;
		case 20:
			return 5
			break;
		case 21:
			return 5
			break;
		case 22:
			return 5
			break;
		default:
			return 0
			break;		
	}
}

console.log(getKyu([66,12,90,15], 15))			// 2 		
console.log(getKyu([1,7,2,3,4,5], 1))			// 1
console.log(getKyu([1,7,2,3,4,5,9,10], 7))		// 4