// The owner of the doggy daycare wants to know whether she can accept new dogs into her daycare and needs to check whether they have been wormed and vaccinated in order to accept them either by themselves or as well as other dogs.

// There is a Dog prototype (class in Ruby) that needs to be extended with the method checkDog (check_dog). Dog currently has the following properties (attributes):

//     name
//     age
//     breed
//     vaccinated
//     wormed

// You'll need to return the dog's name each time as well as " can be accepted", " can only be accepted by itself" and " can not be accepted".

//     If the dog is vaccinated and wormed, the dog can be accepted.
//     If the dog is only vaccinated or only wormed, the dog can only be accepted by itself.
//     If the dog has not be vaccianted or wormed, the dog can not be accepted.

// Example:

// var spot = new Dog("Spot", 5, "Labrador", true, false);
// spot.checkDog(); // Should return: "Spot can only be accepted by itself".

class Dog {
  constructor(name, age, breed, vaccinated, wormed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.vaccinated = vaccinated;
    this.wormed = wormed;
  }
  checkDog() {
    if (this.vaccinated && this.wormed) return `${this.name} can be accepted`;
    if (this.vaccinated || this.wormed)
      return `${this.name} can only be accepted by itself`;
    return `${this.name} can not be accepted`;
  }
}

var spot = new Dog("Spot", 5, "Labrador", true, false);
var riley = new Dog("Riley", 3, "GoldenDoodle", true, true);
var clive = new Dog("Clive", 8, "German Shepard", false, false);

console.log(spot);
console.log(riley);
console.log(clive);

console.log(spot.checkDog()); // "Spot can only be accepted by itself"
console.log(riley.checkDog()); // "Riley can be accepted"
console.log(clive.checkDog()); // "Clive can not be accepted"
