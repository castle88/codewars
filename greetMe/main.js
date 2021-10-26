// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.


var greet = function(name) {
	let arr = name.split('').map((x,i) => {
		if(i === 0) return x.toUpperCase()
		return x.toLowerCase()
	})
	return arr.join('')
	//return `Hello ${answer}!`
};


console.log(greet('riley'))	// 'Hello Riley!'