// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }

// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color")

function makeClass(...properties) {
  return function () {
    const obj = {};
    const args = Array.from(arguments);
    properties.forEach((x, i) => (obj[x] = args[i]));
    return obj;
  };
}

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
const Animel = makeClass("name", "species", "age", "health", "weight", "color");
console.log(Animel("Bob", "Dog", "5", "good", "50lb", "brown"));

// describe("Basic Tests", function() {
//   const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')
//   const dog2 = new Animel('Bob','Dog','5','good','50lb','brown')
//   it("check for object similarity", function() {
//     Test.assertEquals(Object.keys(dog1).join`,`,Object.keys(dog2).join`,`)
//     Test.assertEquals(Object.values(dog1).join`,`,Object.values(dog2).join`,`)
//   });
// });
