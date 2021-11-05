// Description:

// Remove all exclamation marks from sentence except at the end.


function remove(s){
	return s.split(' ')
}


console.log(remove("Hi!"))		//  "Hi!"
console.log(remove("Hi!!!"))		//  "Hi!!!"
console.log(remove("!Hi"))		//  "Hi"
console.log(remove("!Hi!"))		//  "Hi!"
console.log(remove("Hi! Hi!"))		//  "Hi Hi!"
console.log(remove("Hi"))		//  "Hi"