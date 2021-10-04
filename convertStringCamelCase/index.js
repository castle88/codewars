// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
	const words = str.split(/[_-]/g)
	const answer = words.filter(x=>{
		if(x!==words[0]){
			return x
		}
	}).map(x=>{
		return x.replace(x.charAt(0), x.charAt(0).toUpperCase())
	})
	const first = words.shift()
	answer.unshift(first)
	return answer.join('')
}


console.log(toCamelCase('')) 				//''
console.log(toCamelCase("the_stealth_warrior")) 	//"theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")) 	//"TheStealthWarrior"
console.log(toCamelCase("A-B-C"))			//"ABC"



// const arr = str.split(/[_-]/)
// 	const upper = arr.filter(x=>{
// 		if(x !== arr[0]){
// 			return x
// 		}
// 	})
	
// 	const first = arr.shift()
// 	//camel.unshift(first)
// 	//return upper.join('')
// 	return upper

// const answer = str.split(/[_-]/g)
// 	const camel = answer.filter(x=>{
// 		if(x === answer[0]){
// 			x.charAt(0).toLowerCase() + x.substring(1)
// 		}else{
// 			x.charAt(0).toUpperCase() + x.substring(1)
// 		}
// 	})
// 	return camel