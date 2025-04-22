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
  