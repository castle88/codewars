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
// // },
// //]

// function convertToRoman(num) {
// 	const key = [
// 		{
// 			'1':'I',		// 1's
// 			'2':'II',
// 			'3':'III',
// 			'4':'IV',
// 			'5':'V',
// 			'6':'VI',
// 			'7':'VII',
// 			'8':'VIII',
// 			'9':'IX'
// 		},
// 		{
// 			'1':'X',		// 10's
// 			'2':'XX',
// 			'3':'XXX',
// 			'4':'XL',
// 			'5':'L',
// 			'6':'LX',
// 			'7':'LXX',
// 			'8':'LXXX',
// 			'9':'XC',
// 		},
// 		{
// 			'1':'C',		// 100's
// 			'2':'CC',
// 			'3':'CCC',
// 			'4':'CD',
// 			'5':'D',
// 			'6':'DC',
// 			'7':'DCC',
// 			'8':'DCCC',
// 			'9':'CM',
// 		},
// 		{
// 			'1':'M',		// 1000's
// 			'2':'MM',
// 			'3':'MMM'
// 		},
// 	]
	
// 	let numArrAsString = String(num).split('').reverse()
	
// 	return numArrAsString.map((x, i) => key[i][x]).filter(x => x !== undefined).reverse().join('')
// }

// // console.log(convertToRoman(2))			// II.
// // console.log(convertToRoman(3))			// III.
// // console.log(convertToRoman(4))			// IV.
// // console.log(convertToRoman(5))			// V.
// // console.log(convertToRoman(9))			// IX.


// // console.log(convertToRoman(12))				// XII. - XII
// // console.log(convertToRoman(16))				// XVI. - XVI
// // console.log(convertToRoman(29))				// XXIX. - XXIX
// // console.log(convertToRoman(44))				// XLIV. - XLIV
// // console.log(convertToRoman(45))				// XLV.	 - XLV
// // console.log(convertToRoman(68))				// LXVIII - LXVIII
// // console.log(convertToRoman(83))				// LXXXIII - LXXXIII
// // console.log(convertToRoman(97))				// XCVII - XCVII
// // console.log(convertToRoman(99))				// XCIX -> XCIX


// // console.log(convertToRoman(400))			// CD - CD
// // console.log(convertToRoman(500))			// D - D
// // console.log(convertToRoman(501))			// DI - DI
// // console.log(convertToRoman(649))			// DCXLIX - DCXLIX
// // console.log(convertToRoman(798))			// DCCXCVIII - DCCXCVIII
// // console.log(convertToRoman(891))			// DCCCXCI - DCCCXCI


// console.log(convertToRoman(1000))			// M
// console.log(convertToRoman(1004))			// MIV
// console.log(convertToRoman(1006))			// MVI
// console.log(convertToRoman(1023))			// MXXIII
// console.log(convertToRoman(2014))			// MMXIV
// console.log(convertToRoman(3999))			// MMMCMXCIX





// ***************** CAESARS CIPHER ***********************




// function rot13(str) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
// 	const strArr = str.split(' ').map(x => {
// 		return x.split('').map(x => {
// 			if(alphabet.indexOf(x) === -1){
// 				return x
// 			}else{
// 				return alphabet.indexOf(x) - 13 < 0 ? alphabet[26 + (alphabet.indexOf(x) - 13)] : alphabet[alphabet.indexOf(x) - 13]	
// 			}
// 		}).join('')
// 	})
// 	return strArr.join(' ')
// }


// console.log(rot13("SERR PBQR PNZC"))						//  FREE CODE CAMP
// console.log(rot13("SERR CVMMN!"))						//  FREE PIZZA!
// console.log(rot13("SERR YBIR?"))						//  FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))		//  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.




// *********************************** INTERMEDIATE ALGO ********************************************




// function sumAll(arr) {
// 	arr.sort((a, b) => a - b)
// 	let answer = []
// 	for(let i = arr[0]; i <= arr[1]; i++){
// 		answer.push(i)
// 	}
// 	return answer.reduce((acc, cur) => acc += cur)
// }




// console.log(sumAll([1, 4])) 	// 10
// console.log(sumAll([4, 1])) 	// 10
// console.log(sumAll([5, 10])) 	// 45
// console.log(sumAll([10, 5])) 	// 45


// function diffArray(arr1, arr2) {
//   let count = [...arr1, ...arr2].reduce((acc, cur) => {
// 	acc[cur] ? acc[cur] += 1 : acc[cur] = 1
// 	return acc
//   },{})
//   let answer = []
//   for(let key in count){
// 	if(count[key] === 1){
// 		if(key.match(/\d/)){
// 			answer.push(Number(key))
// 		}else{
// 			answer.push(key)
// 		}
// 	}
//   }
//   return answer
// }



// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))	// ["pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))	// ["diorite", "pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))	// [].

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))					//  [4].
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))			//  ["piglet", 4].
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))			//  ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))				//  [1, "calf", 3, "piglet", 7, "filly"].



// function destroyer(arr) {
//   const args = Array.from(arguments).filter((x, i) => i !== 0)
//   return arr.filter(x => args.includes(x) === false)
// }


// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))			// should return [1, 1].
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))			// should return [1, 5, 1].
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))			// should return [1].
// console.log(destroyer([2, 3, 2, 3], 2, 3))				// should return [].
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53))		// should return ["hamburger"].
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")) 	// should return [12,92,65].


// function whatIsInAName(collection, source) {
//   const arr = [];
//   // Only change code below this line
//   collection.forEach(x => {
// 	if(Object.getOwnPropertyNames(source).every(y => x[y] === source[y])){
// 		arr.push(x)
// 	}
//   })
//   // Only change code above this line
//   return arr;
// }


// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) 	// [{ first: "Tybalt", last: "Capulet" }].
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) 									// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) 					// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) 				// [{ "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))			// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})) 											// []



// function spinalCase(str) {
// 	let format = str.replace(/\W/g,' ').replace(/_/g, ' ').split('')
// 	return format.map(x => {
// 		if(x.match(/[A-Z]/)){
// 			return ` ${x.toLowerCase()}`
// 		}else{
// 			return x
// 		}
// 	}).join('').trim().split(' ').join('-').replace(/--/g, '-')
// }

// console.log(spinalCase("This Is Spinal Tap"))			// this-is-spinal-tap
// console.log(spinalCase("thisIsSpinalTap"))			// this-is-spinal-tap
// console.log(spinalCase("The_Andy_Griffith_Show"))		// the-andy-griffith-show
// console.log(spinalCase("Teletubbies say Eh-oh"))		// teletubbies-say-eh-oh
// console.log(spinalCase("AllThe-small Things"))			// all-the-small-things


// function translatePigLatin(str) {
// 	let consonants = str.match(/^([^aeiou]+)/)
// 	return consonants ? str.replace(/^[^aeiou]+/, '').concat(`${consonants[0]}ay`) : str.concat('way')
// }

// console.log(translatePigLatin("california"))					//  aliforniacay.
// console.log(translatePigLatin("paragraphs"))					//  aragraphspay.
// console.log(translatePigLatin("glove"))						//  oveglay.
// console.log(translatePigLatin("algorithm"))					//  algorithmway.
// console.log(translatePigLatin("eight"))						//  eightway.

// // Should handle words where the first vowel comes in the middle of the word. 
// console.log(translatePigLatin("schwartz")) 					// artzschway.

// // Should handle words without vowels. 
// console.log(translatePigLatin("rhythm"))		 			//  rhythmay.

// function myReplace(str, before, after) {
// 	let replacer 
// 	if(before.charAt(0).match(/[A-Z]/)){
// 		replacer = after.replace(after.charAt(0), after.charAt(0).toUpperCase())
// 	}else{
// 		replacer = after.replace(after.charAt(0), after.charAt(0).toLowerCase())
// 	}
// 	return str.replace(before, replacer)
// }

// console.log(myReplace("Let us go to the store", "store", "mall"))				// Let us go to the mall.
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))			// He is Sitting on the couch.
// console.log(myReplace("I think we should look up there", "up", "Down"))				// I think we should look down there.
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))			// This has a spelling error.
// console.log(myReplace("His name is Tom", "Tom", "john"))					// His name is John.
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))		// Let us get back to more Algorithms.


// function pairElement(str) {
// 	const arr = str.split('')
// 	return arr.map(x => {
// 		switch(x){
// 			case 'A':
// 				return ['A', 'T']
// 				break;
// 			case 'G':
// 				return ['G', 'C']
// 				break;
// 			case 'T':
// 				return ['T', 'A']
// 				break;
// 			case 'C':
// 				return ['C', 'G']
// 				break;
// 		}
// 	})
// }


// console.log(pairElement("ATCGA")) // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement("TTGAG")) // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement("CTCTA")) // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]


// function fearNotLetter(str) {
// 	let arr = str.split('').map(x => x.charCodeAt())
// 	let pushArr = []
// 	for(let i = arr[0]; i <= arr[arr.length - 1]; i++){
// 		pushArr.push(i)
// 	}
// 	let answer = pushArr.filter(x => !arr.includes(x))
// 	return	answer[0] === undefined ? answer[0] : String.fromCharCode(answer[0])
// }


// console.log(fearNotLetter("abce"))					// should return the string d.
// console.log(fearNotLetter("abcdefghjklmno"))				// should return the string i.
// console.log(fearNotLetter("stvwx"))					// should return the string u.
// console.log(fearNotLetter("bcdf"))					// should return the string e.
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))		// should return undefined.


// function uniteUnique(arr) {
// 	let bigArr = []
// 	const args = Array.from(arguments)
// 	args.forEach(x => {
// 		x.forEach(y =>{
// 			bigArr.push(y)
// 		})
// 	})
// 	return [...new Set(bigArr)]
// }


// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))		// should return [1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]))				// should return [1, 2, 3, 5].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))	// should return [1, 2, 3, 5, 4, 6, 7, 8].


// function convertHTML(str) {
// 	const sym = {
// 		'&': 'amp',
// 		'<': 'lt',
// 		'>': 'gt',
// 		'"': 'quot',
// 		"'": 'apos'
// 	}
// 	let charArr = str.split('').map(x => {
// 		return sym[x] ? `&${sym[x]};` : x
// 	})
// 	return charArr.join('')
// }

// console.log(convertHTML("Dolce & Gabbana"))			// should return the string Dolce &amp; Gabbana.
// console.log(convertHTML("Hamburgers < Pizza < Tacos"))		// should return the string Hamburgers &lt; Pizza &lt; Tacos.
// console.log(convertHTML("Sixty > twelve"))			// should return the string Sixty &gt; twelve.
// console.log(convertHTML('Stuff in "quotation marks"'))		// should return the string Stuff in &quot;quotation marks&quot;.
// console.log(convertHTML("Schindler's List"))			// should return the string Schindler&apos;s List.
// console.log(convertHTML("<>"))					// should return the string &lt;&gt;.
// console.log(convertHTML("abc"))					// should return the string abc.

// Fib sequence -> 1,1,2,3,5,8

// function sumFibs(num) {
// 	let fibArr = [1,1]
// 	for(let i = 1; i < num; i++){
// 		fibArr.push(fibArr[i] + fibArr[i - 1])
// 	}
// 	return fibArr.filter(x => x <= num && x % 2 !== 0).reduce((acc, cur) => acc += cur)
// }

// console.log(sumFibs(10))			// 10 
// console.log(sumFibs(1000))			// 1785
// console.log(sumFibs(4000000))			// 4613732
// console.log(sumFibs(4))				// 5
// console.log(sumFibs(75024))			// 60696
// console.log(sumFibs(75025))			// 135721



// function sumPrimes(num) {
// 	let answerArr = []
// 	for(let i = 1; i <= num; i++){
// 		let primes = []
// 		for(let y = 1; y <= i; y++){
// 			if(i % y === 0){
// 				primes.push(y)
// 			}
// 		}
// 		answerArr.push(primes)
// 	}
// 	return answerArr.filter(x => x.length === 2).reduce((acc, cur) => acc += cur[1],0)
// }


// console.log(sumPrimes(10))		// 17
// console.log(sumPrimes(977))		// 73156

// function smallestCommons(arr) {
// 	arr.sort((a, b) => a -b)						// WRONG! REVISIT
// 	let multiples = []
// 	for(let i = arr[0]; i <= arr[1]; i++){
// 		multiples.push([arr[0] * i, arr[1] * i])
// 	}
// 	return multiples
// }

// function smallestCommons(arr) {
//   const [min, max] = arr.sort((a, b) => a - b);
//   const range = Array(max - min + 1)
//     .fill(0)
//     .map((_, i) => i + min);
//   const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
//   const lcm = (a, b) => a * b / gcd(a, b);
  
//   return range.reduce((multiple, curr) => lcm(multiple, curr));
// }

// console.log(smallestCommons([1, 5]))		// 60
// console.log(smallestCommons([5, 1]))		// 60
// console.log(smallestCommons([2, 10]))		// 2520
// console.log(smallestCommons([1, 13]))		// 360360
// console.log(smallestCommons([23, 18]))		// 6056820


// function dropElements(arr, func) {
// 	let condition = arr.map(x => func(x))
// 	if(condition.includes(true)){
// 		return arr.splice(condition.indexOf(true),)
// 	}else{
// 		return []
// 	}
// }

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))		// [3, 4]
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))		// [1, 0, 1]
// console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))		// [1, 2, 3]
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))		// []
// console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))		// [7, 4]
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))		// [3, 9, 2]



// function steamrollArray(arr) {
// 	let answer = []
// 	let flat = (arra) => Array.isArray(arra) ? arra.forEach(x => flat(x)) : answer.push(arra)
// 	arr.forEach(x => flat(x))
// 	return answer
// }

// console.log(steamrollArray([[["a"]], [["b"]]])) 		// ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]])) 		// [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]])) 		// [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]])) 		// [1, {}, 3, 4].

//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// break apart binary string, convert binary numbers to decimal, then convert to characters

// function binaryAgent(str) {
// 	return str.split(' ').map(x => String.fromCharCode(parseInt(x, 2))).join('')
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
// // should return the string Aren't bonfires fun!?

// console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
// // should return the string I love FreeCodeCamp!


// function truthCheck(collection, pre) {
// 	const tOrF = collection.map(x => x[pre] ? true : false)
// 	return tOrF.every(x => x === true)
// }


// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))						// true
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))								// false
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"))	// false
// console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"))										// false
// console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"))								// true
// console.log(truthCheck([{"single": "yes"}], "single"))																						// true
// console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"))																			// false
// console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"))																		// false
// console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"))																			// false


// function addTogether() {
// 	const [first, second] = arguments
// 	if(typeof first !== 'number') return undefined
// 	if(second === undefined){
// 		const addSecond = (second) => {
// 			if(typeof second !== 'number') return undefined
// 			return first + second
// 		}
// 		return addSecond
// 	}
// 	if(typeof second !== 'number') return undefined
// 	return first + second
// }


// console.log(addTogether(2, 3))								// should return 5
// console.log(addTogether(23, 30))							// should return 53
// console.log(addTogether(5)(7))								// should return 12
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))			// should return undefined
// console.log(addTogether(2, "3"))							// should return undefined
// console.log(addTogether(2)([3]))							// should return undefined


// const Person = function(firstAndLast) {
//   // Only change code below this line
//   let fullName = firstAndLast
//   this.setFirstName = (fName) => fullName = `${fName} ${fullName.split(' ')[1]}`
//   this.setLastName = (lName) => fullName = `${fullName.split(' ')[0]} ${lName}`
//   this.setFullName = (name) => fullName = name
//   this.getFirstName = () => fullName.split(' ')[0]
//   this.getLastName = () => fullName.split(' ')[1]
//   // Complete the method below and implement the others similarly
//   this.getFullName = () => fullName 
// };

// const bob = new Person('Bob Ross');
// // bob.getFullName();



// // No properties should be added. Object.keys(bob).length should always return 6.

// console.log(bob instanceof Person)	// should return true.
// //console.log(bob.firstName())  		// should return undefined.
// //console.log(bob.lastName()) 		// should return undefined.

// console.log(bob.getFirstName())		// Bob
// console.log(bob.getLastName())		// Ross
// console.log(bob.getFullName())		// Bob Ross
// console.log(bob.getFullName())		// Haskell Ross after bob.setFirstName("Haskell")
// console.log(bob.getFullName())		// Haskell Curry after bob.setLastName("Curry")
// console.log(bob.getFullName())		// Haskell Curry after bob.setFullName("Haskell Curry")
// console.log(bob.getFirstName())		// Haskell after bob.setFullName("Haskell Curry")
// console.log(bob.getLastName())		// Curry after bob.setFullName("Haskell Curry")



// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   return arr.map(({ name, avgAlt}) => {
// 	const earth = earthRadius + avgAlt
// 	const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM))
// 	return { name, orbitalPeriod }
//   })
// }

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))								// [{name: "sputnik", orbitalPeriod: 86400}].
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))	// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].





// *************   TELEPHONE NUMBER VALIDATOR ********************





// function telephoneCheck(str) {
// 	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
// 	// ^ beginning of string
// 	// (1\s?)? capture group for '1 ' or nothing
// 	// (\(\d{3}\))|\d{3}) capture group '(xxx)' or 'xxx'
// 	// [\s\-]? characters ' ' or '-' or nothing
// 	// \d{3} capture any 3 digits
// 	// [\s\-]? characters ' ' or '-' or nothing
// 	// \d{4}$  any 4 digits at the end of string
// 	return str.match(regex) ? true : false
// }


// console.log(telephoneCheck("1 555-555-5555"))		//  true
// console.log(telephoneCheck("1 (555) 555-5555"))		//  true
// console.log(telephoneCheck("5555555555"))		//  true
// console.log(telephoneCheck("555-555-5555"))		//  true
// console.log(telephoneCheck("(555)555-5555"))		//  true
// console.log(telephoneCheck("1(555)555-5555"))		//  true

// console.log(telephoneCheck("555-5555"))			//  false
// console.log(telephoneCheck("5555555"))			//  false
// console.log(telephoneCheck("1 555)555-5555"))		//  false

// console.log(telephoneCheck("1 555 555 5555"))		//  true
// console.log(telephoneCheck("1 456 789 4444"))		//  true

// console.log(telephoneCheck("123**&!!asdf#"))		//  false
// console.log(telephoneCheck("55555555"))			//  false
// console.log(telephoneCheck("(6054756961)"))		//  false
// console.log(telephoneCheck("2 (757) 622-7382"))		//  false
// console.log(telephoneCheck("0 (757) 622-7382"))		//  false
// console.log(telephoneCheck("-1 (757) 622-7382"))	//  false
// console.log(telephoneCheck("2 757 622-7382"))		//  false
// console.log(telephoneCheck("10 (757) 622-7382"))	//  false
// console.log(telephoneCheck("27576227382"))		//  false
// console.log(telephoneCheck("(275)76227382"))		//  false
// console.log(telephoneCheck("2(757)6227382"))		//  false
// console.log(telephoneCheck("2(757)622-7382"))		//  false
// console.log(telephoneCheck("555)-555-5555"))		//  false
// console.log(telephoneCheck("(555-555-5555"))		//  false
// console.log(telephoneCheck("(555)5(55?)-5555"))		//  false
// console.log(telephoneCheck("55 55-55-555-5"))		//  false




// ************************* CASH REGISTER ************************************



// function checkCashRegister(price, cash, cid) {
// 	const denom = {
// 		'ONE HUNDRED': 100,
// 		'TWENTY': 20,
// 		'TEN': 10,
// 		'FIVE': 5,
// 		'ONE': 1,
// 		'QUARTER': .25,
// 		'DIME': .1,
// 		'NICKEL': .05,
// 		'PENNY': .01,
// 	}
// 	const drawer = cid.map(x => x).reverse().reduce((acc, cur) => {
// 		acc[cur[0]] = cur[1]
// 		return acc
// 	},{})

// 	let change = cash - price
		
// 	const amount = (tot) => {
// 		const arr = []
// 		for(let key in denom){
// 			if(denom[key] < tot){
// 				arr.push([key, Math.floor(change / denom[key])])
// 			}
// 		}
// 		return arr
// 	}
	
// 	for(let i = 0; i < amount(change).length; i++){
// 		if(denom[amount(change)[i][0]] * amount(change)[i][1] < drawer[amount(change)[i][0]] && change - (denom[amount(change)[i][0]] * amount(change)[i][1]) >= 0){
			
// 		}
// 	}
// 	return amount(change)




const REGISTER_STATUS = { closed: 'CLOSED', insufficientFunds: 'INSUFFICIENT_FUNDS', open: 'OPEN', }

function checkCashRegister(price, cash, cid) {
	let changeNeeded = parseFloat(cash - price).toFixed(2)
	let cashRegister = { status: '', change: cid }
	
	const currencyAvailable = getTotalCashRegisterChange(cid)
	cashRegister.status = getTotalCashRegisterStatus(changeNeeded, currencyAvailable)

	if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
		cashRegister.currency = []

		return cashRegister
	}

	cashRegister.change = getCustomersChange(changeNeeded, cid)

	if (changeNeeded > getTotalCashRegisterChange(cashRegister.change)) {
		cashRegister.status = REGISTER_STATUS.insufficientFunds
		cashRegister.change = []
	}

	if (cashRegister.status === REGISTER_STATUS.closed) {
		cashRegister.change = [...cid]
	}

	return cashRegister

}

function getCustomersChange(changeNeeded, currencyInDrawer) {
	const change = []
	const currencyDictionary = {
		'PENNY': 0.01,
		'NICKEL': 0.05,
		'DIME': 0.1,
		'QUARTER': 0.25,
		'ONE': 1.00,
		'FIVE': 5.00,
		'TEN': 10.00,
		'TWENTY': 20.00,
		'ONE HUNDRED': 100.00,
	}

	for (let i = currencyInDrawer.length - 1; i >= 0; i--) {
		const currencyName = currencyInDrawer[i][0]
		const currencyTotal = currencyInDrawer[i][1]
		const currencyValue = currencyDictionary[currencyName]
		let currencyAmount = (currencyTotal / currencyValue).toFixed(2)
		let currencyToReturn = 0

		while (changeNeeded >= currencyValue && currencyAmount > 0) {
			changeNeeded -= currencyValue
			changeNeeded = changeNeeded.toFixed(2)
			currencyAmount--
			currencyToReturn++
		}

		if (currencyToReturn > 0) {
			change.push([currencyName, currencyToReturn * currencyValue])
		}
	}

	return change
}

function getTotalCashRegisterStatus(changeNeeded, currencyAvailable) {
	if (Number(changeNeeded) > Number(currencyAvailable)) {
		return REGISTER_STATUS.insufficientFunds
	}

	if (Number(changeNeeded) < Number(currencyAvailable)) {
		return REGISTER_STATUS.open
	}

	return REGISTER_STATUS.closed
}

function getTotalCashRegisterChange(currencyInDrawer) {
	let total = 0

	for (let currency of currencyInDrawer) {
		let currencyValue = currency[1]
		total += currencyValue
	}

	return total.toFixed(2)
}



	// while(change !== 0 && change > 0){
	// change -= (Math.floor(change / denom[x]) * denom[x])
	
	// }
	// drawer.forEach(x => {
	// 	if(change > denom[x[0]]){
	// 		changeArr.push([x[0], cash - price])
	// 	}
	// })
	// let i = 0
	// let answer = []
	// return changeArr
	// while(change > 0){
	// 	if(!change - denom[changeArr[i[0]]] < 0){
	// 		change = change - (denom[changeArr[i][0]])
	// 	}
	// 	answer.push([changeArr[i][0], changeArr[i][1], Math.floor(changeArr[i][1] / denom[changeArr[i][0]])])
	// 	i++
	// }



	// let amt = x[1]
	// let i = Math.floor(x[1] / denom[x[0]])
	// answer.push([x[0], i * denom[x[0]]])	



console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))		
// {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))		
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))				
// {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.