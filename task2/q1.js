// ---------- Class-based Inheritance (ES6) ----------
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); // Buddy barks.
console.log(myDog.breed); // Labrador

// ---------- Prototypal Inheritance (Using Object.create) ----------
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// Create an object that inherits from 'animal'
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)
dog.walk(); // "Animal walks"

// Optional: Check the prototype chain
console.log(Object.getPrototypeOf(dog) === animal); // true
