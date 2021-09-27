// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.


function alphabetPosition(text) {
	const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']		//establish array of alphabet
	let arr = text.toLowerCase().split('').filter(x=>{				//break stirng into individual characters all lowercase and filter out anything not a alphabet character
		if(alpha.includes(x)){
			return x
		}
	})
	
	let answer = arr.map(x=>{			//arrays are zero indexed so check each character in text for its position in alphabet array and add 1 to it to get true location in alphabet
	return alpha.indexOf(x)+1
	})
	console.log(answer.join(' '))
}
	
	

console.log(alphabetPosition("The narwhal bacons at midnight."))	// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
console.log(alphabetPosition("The sunset sets at twelve o' clock."))	// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");)