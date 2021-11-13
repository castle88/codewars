// Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

// Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

// eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
	let letters = superSecretChars.map(x => x[0])
	let replacers = superSecretChars.map(x => x[1])
	let pwArr = password.split('')
	return pwArr.map(x => {
		return letters.includes(x.toLowerCase()) ? replacers[letters.indexOf(x.toLowerCase())] : x
	}).join('')
}


console.log(createSSP("haxorpassword"))					// "5@*0rp@$$w0rd"
console.log(createSSP("HaxorPassword"))					// "5@*0rP@$$w0rd"
console.log(createSSP("MuchSecureVeryPassword"))			// "Muc5$ecureVeryP@$$w0rd"
console.log(createSSP(""))						// ""