// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)


function camelCase(string) {
	let words = string.split(' ')
	return words
}

console.log("test case".camelCase())			// "TestCase"
console.log("camel case method".camelCase())		// "CamelCaseMethod"
console.log("say hello ".camelCase())			// "SayHello"
console.log(" camel case word".camelCase())		// "CamelCaseWord"
console.log("".camelCase())				//  ""