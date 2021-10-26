// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.


var greet = function(name) {
	let first = name.slice(name.charAt(0),1)
	let answer = name.replace(first, first.toUpperCase())
	return `Hello ${answer}!`
};


console.log(greet('riley'))	// 'Hello Riley!'