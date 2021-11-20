// function urlSlug(title) {
// 	return title.toLowerCase().split(' ').filter(x => x !== '').join('-')
// }

// console.log(urlSlug("Winter Is Coming"))	// should return the string winter-is-coming.

// console.log(urlSlug(" Winter Is  Coming"))	// should return the string winter-is-coming.

// //console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))	// should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

// //console.log(urlSlug("Hold The Door"))	// should return the string hold-the-door.




// ****************************************************************

// palindrome checker

function palindrome(str) {
  let filtered = str.toLowerCase().split('').filter(x => x.match(/[a-z0-9]/))
  return filtered.join('') === filtered.reverse().join('') ? true : false
}

console.log(palindrome("eye"))						//  true.
console.log(palindrome("_eye"))						//  true.
console.log(palindrome("race car"))					//  true.

console.log(palindrome("not a palindrome"))				//  false.
console.log(palindrome("A man, a plan, a canal. Panama"))		//  true.
console.log(palindrome("never odd or even"))				//  true.

console.log(palindrome("nope"))						//  false.
console.log(palindrome("almostomla"))					//  false.
console.log(palindrome("My age is 0, 0 si ega ym."))			//  true.

console.log(palindrome("1 eye for of 1 eye."))				//  false.
console.log(palindrome("0_0 (: /-\ :) 0-0"))				//  true.
console.log(palindrome("five|\_/|four"))				//  false.