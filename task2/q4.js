// Generator function
function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
      yield count;  // Pause and return the current count
      count++;
    }
  }
  
  // Using the generator
  const counter = countUpTo(3);
  console.log(counter.next().value);  // Output: 1
  console.log(counter.next().value);  // Output: 2
  console.log(counter.next().value);  // Output: 3
  console.log(counter.next().value);  // Output: undefined (no more values)


  // Create a symbol
const uniqueSymbol = Symbol('unique');

// Using a symbol as a key for an object
const obj = {
  [uniqueSymbol]: 'This is a unique value'
};

console.log(obj[uniqueSymbol]);  // Output: This is a unique value

// Symbols are guaranteed to be unique
const anotherSymbol = Symbol('unique');
console.log(uniqueSymbol === anotherSymbol);  // Output: false

  