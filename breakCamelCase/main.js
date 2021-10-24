// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
	let splitted = string.split('')
	let caps = splitted.filter(x => x.match(/[A-Z]/gm))
	let indexes = caps.map(x => splitted.indexOf(x))
	
}


console.log(solution('camelCasing'))		// 'camel Casing'
console.log(solution('camelCasingTest'))	// 'camel Casing Test'


// indexes.forEach(x => {
// 		return splitted.splice(x,0,' ').join('')
// 	})
// 	return splitted