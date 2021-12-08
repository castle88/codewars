// Class conundrum - Bug Fixing #7

// Oh no! Timmy's List Class has broken! Can you help timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which timmy calls Lists).

// When timmy calls the Count property of the list it still remains at 0 when adding items.

// Also it fails when timmy trys to chain the adds e.g.

// myList.add(0).add(1)

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item != this.type)
      return `This item is not of type: ${typeof item}`;

    this.items.push(item);
    return item;
  }
}

let myList = new List("string");

console.log(myList.add("Hello").count); // 1
console.log(myList.add(5)); // 'Wrong type added'
console.log(myList.add(" ").add("World!").count); // 3
