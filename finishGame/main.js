// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

//     If the user tries to guess more than the limit, the function should throw an error.
//     If the user guess is right it should return true.
//     If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      return "error already dead";
    }
    if (this.number === n) {
      return true;
    }
    this.lives--;
    return false;
  }
}

let guesser = new Guesser(10, 2);

guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
console.log(guesser.guess(10)); // true

let guesser2 = new Guesser(10, 2);

guesser2.guess(1);
console.log(guesser2.guess(1)); // false

let guesser3 = new Guesser(10, 2);

guesser3.guess(1);
console.log(guesser3.lives);

guesser3.guess(2);
console.log(guesser3.lives);

console.log(guesser3.guess(10)); // error already dead
