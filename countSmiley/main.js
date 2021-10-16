// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example
// :D || ;D || :) || ;) || :-D || :-) || :~D || :~) || ;-D || ;-) || :~D || :~) || ;~D || ;~)

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


function countSmileys(arr) {
	let answer = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === ':D' || arr[i] ===  ';D' || arr[i] === ':)' || arr[i] === ';)' || arr[i] === ':-D' || arr[i] === ':-)' || arr[i] === ':~D' || arr[i] === ':~)' || arr[i] === ';-D' || arr[i] === ';-)' || arr[i] === ':~D' || arr[i] === ':~)' || arr[i] === ';~D' || arr[i] === ';~)'){
			answer.push(arr[i])
		}
	}
	return answer.length
}

console.log(countSmileys([]))								// 0
console.log(countSmileys([':D',':~)',';~D',':)']))					// 4
console.log(countSmileys([':)',':(',':D',':O',':;']))					// 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))				// 1
console.log(countSmileys([';(', ':o>', ';(', ':~>', ';>', ';>', ':~>']))		// 0?
console.log(countSmileys([';~)', ':~)', ';)', ';~>', ':)', ';~>', ':o)']))		// 4