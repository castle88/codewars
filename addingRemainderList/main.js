// This is a problem that involves adding numbers to items in a list. In a list you will have to add the item's remainder when divided by a given divisor to each item.

// For example if the item is 40 and the divisor is 3 you would have to add 1 since 40 minus the closest multiple of 3 which is 39 is 1. So the 40 in the list will become 41. You would have to return the modified list in this problem.

// For this problem you will receive a divisor called div as well as simple list of whole numbers called nums. Good luck and happy coding.
// Examples

// nums = [2, 7, 5, 9, 100, 34, 32, 0], div = 3
//   ==>  [4, 8, 7, 9, 101, 35, 34, 0] 

// nums = [1000, 999, 998, 997], div = 5
//    ==> [1000, 1003, 1001, 999]

// nums = [], div = 2
//    ==> []

// Note: random tests check lists containing up to 10000 elements.


function solve(nums, div) {
  
}

console.log(solve([2,7,5,9,100,34,32,0],3))		//[4,8,7,9,101,35,34,0])
console.log(solve([],2))				//[])
console.log(solve([1000,999,998,997],5))		//[1000,1003,1001,999])
console.log(solve([0,0,0,0],5))				//[0,0,0,0])
console.log(solve([4,3,2,1],5))				//[8,6,4,2])
console.log(solve([33,23,45,78,65],10))			//[36,26,50,86,70])	