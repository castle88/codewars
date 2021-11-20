// function urlSlug(title) {
// 	return title.toLowerCase().split(' ').filter(x => x !== '').join('-')
// }

// console.log(urlSlug("Winter Is Coming"))	// should return the string winter-is-coming.

// console.log(urlSlug(" Winter Is  Coming"))	// should return the string winter-is-coming.

// //console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))	// should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

// //console.log(urlSlug("Hold The Door"))	// should return the string hold-the-door.




// ****************************************************************

// palindrome checker

// function palindrome(str) {
//   let filtered = str.toLowerCase().split('').filter(x => x.match(/[a-z0-9]/))
//   return filtered.join('') === filtered.reverse().join('') ? true : false
// }

// console.log(palindrome("eye"))						//  true.
// console.log(palindrome("_eye"))						//  true.
// console.log(palindrome("race car"))					//  true.

// console.log(palindrome("not a palindrome"))				//  false.
// console.log(palindrome("A man, a plan, a canal. Panama"))		//  true.
// console.log(palindrome("never odd or even"))				//  true.

// console.log(palindrome("nope"))						//  false.
// console.log(palindrome("almostomla"))					//  false.
// console.log(palindrome("My age is 0, 0 si ega ym."))			//  true.

// console.log(palindrome("1 eye for of 1 eye."))				//  false.
// console.log(palindrome("0_0 (: /-\ :) 0-0"))				//  true.
// console.log(palindrome("five|\_/|four"))				//  false.


//************************************************************************************** */

// roman numeral converter

function convertToRoman(num) {
 return num;
}

convertToRoman(36);
console.log(convertToRoman(2))			// should return the string II.
console.log(convertToRoman(3))			// should return the string III.
console.log(convertToRoman(4))			// should return the string IV.
console.log(convertToRoman(5))			// should return the string V.
console.log(convertToRoman(9))			// should return the string IX.
console.log(convertToRoman(12))			//  should return the string XII.
console.log(convertToRoman(16))			//  should return the string XVI.
console.log(convertToRoman(29))			//  should return the string XXIX.
console.log(convertToRoman(44))			//  should return the string XLIV.
console.log(convertToRoman(45))			//  should return the string XLV.
console.log(convertToRoman(68))			//  should return the string LXVIII
console.log(convertToRoman(83))			//  should return the string LXXXIII
console.log(convertToRoman(97))			//  should return the string XCVII
console.log(convertToRoman(99))			//  should return the string XCIX
console.log(convertToRoman(400))		//  should return the string CD
console.log(convertToRoman(500))		//  should return the string D
console.log(convertToRoman(501))		//  should return the string DI
console.log(convertToRoman(649))		//  should return the string DCXLIX
console.log(convertToRoman(798))		//  should return the string DCCXCVIII
console.log(convertToRoman(891))		//  should return the string DCCCXCI
console.log(convertToRoman(1000))		//  should return the string M
console.log(convertToRoman(1004))		//  should return the string MIV
console.log(convertToRoman(1006))		//  should return the string MVI
console.log(convertToRoman(1023))		//  should return the string MXXIII
console.log(convertToRoman(2014))		//  should return the string MMXIV
console.log(convertToRoman(3999))		//  should return the string MMMCMXCIX