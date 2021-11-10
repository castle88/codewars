// To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad

// If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'

// All Hail King Partridge

function part(x){
	let alan = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad']
	let arr = x.filter(y => alan.includes(y))
	let answer = `Mine's a Pint`
	if(arr.length < 1) return `Lynn, I've pierced my foot on a spike!!`
	arr.forEach(x => answer += '!')
	return answer
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']))	// 'Mine\'s a Pint!'
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']))	// 'Lynn, I\'ve pierced my foot on a spike!!'

console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']))	
// 'Mine\'s a Pint!!!!!!!!'
