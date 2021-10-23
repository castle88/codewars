// Complete the function/method so that it returns the url with anything after the anchor (#) removed. 


function removeUrlAnchor(url){
	let answer = url.split('#')
	return answer[0]
}



console.log(removeUrlAnchor('www.codewars.com#about'))			// 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))	// 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/'))			// 'www.codewars.com/katas/'
