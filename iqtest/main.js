// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  const numArr = numbers.split(' ')
  let evens = numArr.filter(x=>{
	if(x % 2 === 0)return x
  })	
  let odds = numArr.filter(x=>{
	if(x % 2 !== 0)return x
  })
  if(evens.length === 1){
	return numArr.indexOf(evens[0])+1
  }else{
	return numArr.indexOf(odds[0])+1
  }
}


console.log(iqTest("2 4 7 8 10"))	// 3
console.log(iqTest("1 2 2"))		// 1
