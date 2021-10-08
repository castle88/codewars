// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let answer = []
  let stringCombo = s1.concat(s2)
  let stringArr = stringCombo.split('').forEach(x=>{
	if(!answer.includes(x)) answer.push(x)
  })
  return answer.sort().join('')
}


console.log(longest("aretheyhere", "yestheyarehere"))				// "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))	// "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))		// "acefghilmnoprstuy
