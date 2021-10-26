// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

function stringTransformer(str) {
	let wordPosition = str.split(' ').reverse().join(' ')
	let answer = wordPosition.split('').map(x => {
		if(x === x.toUpperCase()) return x.toLowerCase()
		return x.toUpperCase()
	})
	return answer.join('')
}


console.log(stringTransformer('Example string'))	// 'STRING eXAMPLE'