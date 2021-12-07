// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// Task

// Define the following classes.
// I. Cuboid

// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.
// II. Cube

// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
// Related Articles

// Listed below are a few articles of interest that may help you complete this Kata:

class Cuboid {
  // TODO: Program Me
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
}

var cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length); // 1
console.log(cuboid.width); // 2
console.log(cuboid.height); // 3
console.log(cuboid.volume); // 6
console.log(cuboid.surfaceArea); // 22

cuboid.length = 4;

console.log(cuboid.volume); // 24
console.log(cuboid.surfaceArea); // 52

cuboid.width = 5;

console.log(cuboid.volume); // 60
console.log(cuboid.surfaceArea); // 94

cuboid.height = 6;

console.log(cuboid.volume); // 120
console.log(cuboid.surfaceArea); // 148

console.log([(cuboid.length, cuboid.width, cuboid.height)]); // [7, 8, 9];

console.log(cuboid.volume); // 504
console.log(cuboid.surfaceArea); // 382
