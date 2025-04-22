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
