/*Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
	const arr = strng.split('')		//split string into individual characters 
	let answer = '1'
	let numArr = ['0','1','2','3','4','5','6','7','8','9']	//for comparison regex isnt working?
	const numbers = arr.filter(x=>{
		if(numArr.includes(x)){			// isolate numbers of string
			return x
		}
	}) 
	const letters = arr.filter(x=>{
		if(!numArr.includes(x)){
			return x
		}
	})

	if(numbers.length === 0){
	
		numbers.push('1')		// if there are no numbers in string add a num
						// doesnt work without, answer default val should take care of this but doesnt
	}else if(numbers[numbers.length - 2] !== '0'){
	
		answer = parseInt(numbers.join(''))+1	// if no zeros preceed incrementing num add 1
	
	}else if(numbers[0]==='0'){	// if preceeded by zeros ignore them so they dont disappear and add 1 to last digit
					// numbers[numbers.length - 2] === '0' ||
	
		let inc = parseInt(numbers[numbers.length - 1])+1
		numbers.pop()
		answer = numbers.concat(inc.toString()).join('')
	
	}
	
	return letters.concat(answer).join('')	// combine letters array and incremented digits and join into one string
}	
	
// test cases

incrementString("foobar000")	// foobar001
incrementString("foo")		// foo1
incrementString("foobar001")	// foobar002
incrementString("foobar99")	// foobar100
incrementString("foobar099")	// foobar100
incrementString("")		// 1