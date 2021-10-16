// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.




function tickets(peopleInLine){
  const peep = peopleInLine
  let til = 0
  for(let i = 0; i < peep.length; i++){
	let change = peep[i] - 25
	if(change > til) return 'NO'
	til += 25
	til -= change
	console.log(til)
  }
  return 'YES'
}


// console.log(tickets([25, 25, 50, 50]))								// yes
// console.log(tickets([25, 100]))									// no
// console.log(tickets([25,25,50,50,100]))								// no
// console.log(tickets([50,25]))									// no
console.log(tickets([25,25,50,100,25,50,25,100,25,50,25,100,25,25,25,100,25,50,25,100]))	// yes
// console.log(tickets([25,25,50,100,25,25,50,100,25,50,25,100,25,50,25,100]))			// yes



// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)