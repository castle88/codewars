// An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr){
	let str = arr.join('')
	let answer = str.match(/0+/gm)
	if(answer !== null){
		if(answer.every(x => x.length >= 4)) return answer.length
	}
	return 0
}

console.log(zeroPlentiful([3]))			//0);
console.log(zeroPlentiful([0,0,0,0,0,0]))	//1);
console.log(zeroPlentiful([0,0,0,0,2,2,0,0,0,2,0,0,0,0,0,0,0,0]))