// In this Kata, you have to design a simple routing class for a web framework.

// The router should accept bindings for a given url, http method and an action.

// Then, when a request with a bound url and method comes in, it should return the result of the action.

// Example usage:

// var router = new Router;
// router.bind('/hello', 'GET', function(){ return 'hello world'; });

// router.runRequest('/hello', 'GET') // returns 'hello world';

// When asked for a route that doesn't exist, router should return:

// 'Error 404: Not Found'

// The router should also handle modifying existing routes. See the example tests for more details.

class Router {
  constructor() {
    this.routes = [];
  }
  bind(route, method, action) {
    const routeContainer = {
      route: route,
      method: method,
      action: action,
    };

    this.routes.push(routeContainer);
  }
  runRequest(rt, meth) {
    console.log(this.routes);
    const actor = this.routes.filter((obj) => {
      return obj.route === rt && obj.method === meth;
    });
    console.log(actor);
    return actor.length > 0 ? actor[0].action() : "Error 404: Not Found";
  }
}

// let router = new Router();

// router.bind("/hello", "GET", () => "hello world");
// router.bind("/login", "GET", () => "Please log-in.");

// console.log(router.runRequest("/hello", "GET")); // 'hello world'
// console.log(router.runRequest("/login", "GET")); // 'Please log-in.'

// let router = new Router();

// router.bind("/vote", "POST", () => "Voted.");
// router.bind("/comment", "POST", function () {
//   return "Comment sent.";
// });

// console.log(router.runRequest("/vote", "POST")); // 'Voted.'
// console.log(router.runRequest("/comment", "POST")); // 'Comment sent.'

// let router = new Router();

// router.bind("/login", "GET", function () {
//   return "Please log-in.";
// });
// router.bind("/login", "POST", function () {
//   return "Logging-in.";
// });

// console.log(router.runRequest("/login", "GET")); // 'Please log-in.'
// console.log(router.runRequest("/login", "POST")); // 'Logging-in.'

// let router = new Router();

// console.log(router.runRequest("/this-url-does-not-exist", "GET")); // 'Error 404: Not Found'

let router = new Router();

router.bind("/page", "GET", function () {
  return "First binding.";
});
router.bind("/page", "GET", function () {
  return "Modified binding.";
});

console.log(router.runRequest("/page", "GET")); // 'Modified binding.'
