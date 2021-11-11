// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'


function sevenAte9(str){
	let arr = []
	for(let i = 0; i < str.length; i++){
		if(str[i] === '9'){
			arr.push(i)
		}
	}
	arr.forEach(x => {
		if(str[x-1] === '7'){
			str.replace(str[x], '')
		}
	})
	return str
}

console.log(sevenAte9('165561786121789797'))		// '16556178612178977'
console.log(sevenAte9('797'))				// '77'
console.log(sevenAte9('7979797'))			// '7777'