// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


function solution(str){
	let answer = []
	if(str.length % 2 !== 0){
		str = str + '_'		//add blank space to character pairings
	}
	for(let i = 0; i <= str.length; i+=2){
		answer.push(str.charAt(i).concat(str.charAt(i+1)))		// incrementor increases by two and every loop will concat current character index and next char-index
   	}
	answer.pop()			// returning extra blank element in answer array so get it gone
	return answer
}

console.log(solution("abcdef"))			// ["ab", "cd", "ef"]
console.log(solution("abcdefg"))		// ["ab", "cd", "ef", "g_"]
console.log(solution(""))			// []
