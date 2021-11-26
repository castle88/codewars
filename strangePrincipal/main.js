// A high school has a strange principal. On the first day, he has his students perform an odd opening day ceremony:

// There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?

// The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.

// The given input is always an integer greater than or equal to zero that is why there is no need for validation.

// this runs too slow to pass but nice clean functions lol

function numOfOpenLockers(n){
	const firstStudent = first(n)
	const secondStudent = second(firstStudent)
	let studentLoop = secondStudent
	
	for (let i = 3; i <= n; i++) {
		studentLoop = everyoneElse(i, studentLoop)
	}
	const answer = studentLoop.filter(x => x === 'open')
	
	return answer.length
}

function first(n) {
	const lockers = []
	for (let i = 1; i <= n; i++) {
		lockers.push('open')
	}

	return lockers
}

function second(array) {
	return array.map((x, i) => i % 2 !== 0 ? 'closed' : x)
}

function everyoneElse(studentPosition, array) {
	return array.map((x, i) => {
		if ((i + 1) % studentPosition === 0) {
			return x === 'open' ? 'closed' : 'open'
		}
		return x
	})
}


//console.log(everyoneElse(3, ['open', 'closed', 'open','closed','open','closed']))

//console.log(numOfOpenLockers(20))
console.log(numOfOpenLockers(4521))	 // 67
console.log(numOfOpenLockers(203))	 // 14
console.log(numOfOpenLockers(99))