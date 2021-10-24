// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
	let splitted = string.split('')
	let differentSplit = string.split(/[A-Z]/gm)
	let caps = splitted.filter(x => x.match(/[A-Z]/gm))
	for(let i = 0; i < caps.length; i++){
		caps[i] += differentSplit[i+1]
	}
	return `${differentSplit[0]} ${caps.join(' ')}`
}


console.log(solution('camelCasing'))		// 'camel Casing'
console.log(solution('camelCasingTest'))	// 'camel Casing Test'


// indexes.forEach(x => {
// 		return splitted.splice(x,0,' ').join('')
// 	})
// 	return splitted