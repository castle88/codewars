// Rock-Paper-Scissors Big Bang Style

// According to Sheldon Cooper the following is true:

//     Scissors cuts Paper
//     Paper covers Rock
//     Rock crushes Lizard
//     Lizard poisons Spock
//     Spock smashes Scissors
//     Scissors decapitates Lizard
//     Lizard eats Paper
//     Paper disproves Spock
//     Spock vaporizes Rock
//     ( and as it always has ) Rock crushes Scissors

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

// Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".

function rpsls(pl1, pl2) {
  //Your Magnificent Code here
}

// pl1 win

console.log(rpsls("rock", "lizard")); // 'Player 1 Won!
console.log(rpsls("paper", "rock")); // 'Player 1 Won!
console.log(rpsls("scissors", "lizard")); // 'Player 1 Won!
console.log(rpsls("lizard", "paper")); // 'Player 1 Won!
console.log(rpsls("spock", "rock")); // 'Player 1 Won!

// pl2 win

console.log(rpsls("lizard", "scissors")); // 'Player 2 Won!'
console.log(rpsls("spock", "lizard")); // 'Player 2 Won!'
console.log(rpsls("paper", "lizard")); // 'Player 2 Won!'
console.log(rpsls("scissors", "spock")); // 'Player 2 Won!'
console.log(rpsls("rock", "spock")); // 'Player 2 Won!'

// draw

console.log(rpsls("rock", "rock")); // 'Draw!
console.log(rpsls("spock", "spock")); // 'Draw!
