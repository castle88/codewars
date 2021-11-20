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
// // console.log(palindrome("A man, a plan, a canal. Panama"))		//  true.
// // console.log(palindrome("never odd or even"))				//  true.

// // console.log(palindrome("nope"))						//  false.
// // console.log(palindrome("almostomla"))					//  false.
// // console.log(palindrome("My age is 0, 0 si ega ym."))			//  true.

// // console.log(palindrome("1 eye for of 1 eye."))				//  false.
// // console.log(palindrome("0_0 (: /-\ :) 0-0"))				//  true.
// // console.log(palindrome("five|\_/|four"))				//  false.


// //************************************************************************************** */

// // roman numeral converter

// *************** KEY **************************
// const key = [
// {
	// 1:I,
	// 2:II,
	// 3:III,
	// 4:IV,
	// 5:V,
	// 6:VI,
	// 7:VII,
	// 8:VIII,
	// 9:IX
// },
// {
	// 10:X,
	// 20:XX,
	// 30:XXX,
	// 40:XL,
	// 50:L,
	// 60:LX,
	// 70:LXX,
	// 80:LXXX,
	// 90:XC,
// },
// {
	// 100:C,
	// 200:CC,
	// 300:CCC,
	// 400:CD,
	// 500:D,
	// 600:DC,
	// 700:DCC,
	// 800:DCCC,
	// 900:CM,
// },
// {
	// 1000:M,
	// 2000:MM,
	// 3000:MMM
// },
//]

function convertToRoman(num) {
	const key = [
		{
			'1':'I',		// 1's
			'2':'II',
			'3':'III',
			'4':'IV',
			'5':'V',
			'6':'VI',
			'7':'VII',
			'8':'VIII',
			'9':'IX'
		},
		{
			'1':'X',		// 10's
			'2':'XX',
			'3':'XXX',
			'4':'XL',
			'5':'L',
			'6':'LX',
			'7':'LXX',
			'8':'LXXX',
			'9':'XC',
		},
		{
			'1':'C',		// 100's
			'2':'CC',
			'3':'CCC',
			'4':'CD',
			'5':'D',
			'6':'DC',
			'7':'DCC',
			'8':'DCCC',
			'9':'CM',
		},
		{
			'1':'M',		// 1000's
			'2':'MM',
			'3':'MMM'
		},
	]
	
	let numArrAsString = String(num).split('').reverse()
	
	return numArrAsString.map((x, i) => key[i][x]).filter(x => x !== undefined).reverse().join('')

}

// console.log(convertToRoman(2))			// II.
// console.log(convertToRoman(3))			// III.
// console.log(convertToRoman(4))			// IV.
// console.log(convertToRoman(5))			// V.
// console.log(convertToRoman(9))			// IX.

console.log(convertToRoman(12))				// XII.
console.log(convertToRoman(16))				// XVI.
console.log(convertToRoman(29))				// XXIX.
console.log(convertToRoman(44))				// XLIV.
console.log(convertToRoman(45))				// XLV.
console.log(convertToRoman(68))				// LXVIII
console.log(convertToRoman(83))				// LXXXIII
console.log(convertToRoman(97))				// XCVII
console.log(convertToRoman(99))				// XCIX

// console.log(convertToRoman(400))			// CD
// console.log(convertToRoman(500))			// D
// console.log(convertToRoman(501))			// DI
// console.log(convertToRoman(649))			// DCXLIX
// console.log(convertToRoman(798))			// DCCXCVIII
// console.log(convertToRoman(891))			// DCCCXCI

// console.log(convertToRoman(1000))			// M
// console.log(convertToRoman(1004))			// MIV
// console.log(convertToRoman(1006))			// MVI
// console.log(convertToRoman(1023))			// MXXIII
// console.log(convertToRoman(2014))			// MMXIV
// console.log(convertToRoman(3999))			// MMMCMXCIX