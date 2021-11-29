// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
// Examples

// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0



function sumOfABeach(beach) {
	const regex = /(Water)|(Sand)|(Sun)|(Fish)/gmi
	return beach.match(regex) === null ? 0 : beach.match(regex).length
}


console.log(sumOfABeach("SanD"))			// 1
console.log(sumOfABeach("sunshine"))			// 1
console.log(sumOfABeach("sunsunsunsun"))		// 4
console.log(sumOfABeach("123FISH321"))			// 1
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"))	// 3