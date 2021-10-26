// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.


var greet = function(name) {
	return name.charAt(0).toUpperCase()
};


console.log(greet('riley'))	// 'Hello Riley!'