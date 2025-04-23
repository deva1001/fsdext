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
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }


  // Parent object
const animal = {
    eats: true,
    walk() {
      console.log("Animal walks");
    }
  };
  
  // Create a new object that inherits from 'animal'
  const dog = Object.create(animal);
  dog.barks = true;
  
  console.log(dog.eats); // true (inherited from animal)
  console.log(dog.barks); // true (own property)
  dog.walk(); // "Animal walks"
  

  

