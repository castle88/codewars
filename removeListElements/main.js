// Define a method/function that removes from a given array of integers all the values contained in a second array.
// Examples:

// l = List()

// integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
// values_list = [1, 3]
// l.remove_(integer_list, values_list) == [2, 2, 4]

// integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
// lst = [1, 3, 4, 2]
// l.remove_(integer_list, values_list) == [5, 6 ,7 ,8]

// integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
// lst = [2, 4, 3]
// l.remove_(integer_list, values_list) == [8, 7, 6, 5, 1]

// Enjoy it!!


function remove(integer_list, values_list){
	return integer_list.filter(x => !values_list.includes(x))
}


console.log(remove([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]))					// [2, 2, 4]
console.log(remove([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2])) 	// [5, 6 ,7 ,8]
console.log(remove([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3]))		// [8, 7, 6, 5, 1]
console.log(remove([4, 4, 2 , 3], [2, 2, 4, 3]))					// []
console.log(remove([], [2, 2, 4, 3]))       						// []