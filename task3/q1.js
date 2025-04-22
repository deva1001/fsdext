// Higher-order function: takes a function as an argument
function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
  }
  
  // Function passed as an argument
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  // Calling the higher-order function with a function as an argument
  greet('Alice', sayHello);  // Output: Hello, Alice!

  
  // Higher-order function that returns a function
function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  // Using the higher-order function to create a new function
  const double = multiplier(2);  // A function that doubles the input
  const triple = multiplier(3);  // A function that triples the input
  
  console.log(double(5));  // Output: 10
  console.log(triple(5));  // Output: 15
  
  const numbers1 = [1, 2, 3, 4];

// map() takes a function and applies it to each element in the array
const doubled = numbers1.map(number => number * 2);

console.log(doubled);  // Output: [2, 4, 6, 8]

const numbers = [1, 2, 3, 4, 5];

// filter() takes a function and returns an array of elements that pass the condition
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4]
