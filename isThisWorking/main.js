// Rewriting selfies
// Let's get rid of the `self` usage, by using arrow functions!

// This can be achieved without arrow functions as well, but the point would be to learn the differences.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


function Counter(){
  var self = this;
  self.count = 0;

  self.updateCount = function(){
    self.count++
  };
}



var counter = new Counter();

console.log(counter.count)		// 0, "Counter should be reset"

counter.updateCount();

console.log(counter.count)		// 1, "Counter should have been updated"

var counter2 = new Counter();

console.log(counter2.count)		// 0, "New counter should use different value"
console.log(counter.count)		// 1, "Old counter should have preserved its value"