// Description:

// Remove all exclamation marks from sentence except at the end.


function remove(s){
	let arr = s.split(' ')
	let answer = arr.map((x, i) =>{ 
		if(i === arr.length - 1){
			return x.charAt(0) === '!' ? x.replace('!','') : x
		}else{
			return x.replace(/!/gm, '')
		}
	})
	return answer.join(' ')
}


console.log(remove("Hi!"))		//  "Hi!"
console.log(remove("Hi!!!"))		//  "Hi!!!"
console.log(remove("!Hi"))		//  "Hi"
console.log(remove("!Hi!"))		//  "Hi!"
console.log(remove("Hi! Hi!"))		//  "Hi Hi!"
console.log(remove("Hi"))		//  "Hi"