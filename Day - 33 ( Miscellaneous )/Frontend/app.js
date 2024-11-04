// 1 Way to create objects
// function PersonMaker(name, age) {
// Factory function
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, My name is ${this.name}`);
//     },
//   };
//   return person;
// }

// let p1 = PersonMaker("yash", 21); // copy has it's own talk() method
// let p2 = PersonMaker("yash1", 22); // copy has it's own talk() method

// 2 Way to create objects
// Constructor function - does't return anything & starts with capital letter
// function Person(name, age) {
//   this.name = name; // property's
//   this.age = age;
// }

// Person.prototype.talk = function () {
// functions
//   console.log(`Hi , my name is ${this.name}`);
// };

// let p1 = new Person("yash", 20); // instance
// let p2 = new Person("yash", 21); // instance

// 3 Way to create objects

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi , my name is ${this.name}`);
//   }
// }

// let p1 = new Person("yash", 20); // instance
// let p2 = new Person("yash", 21); // instance

// Inheritance

class Person {
  constructor(name, age) {
    console.log("Person constructor called");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi , my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    console.log("student constructor called");
    super(name, age); // Parent class constructor is binge called
    this.marks = marks;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

class Mammal {
  // base or parent class
  constructor(name) {
    this.name = name;
    this.type = "warm-Blooded";
  }
  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  // child class
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Wnnnmu");
  }
  eat() {
    console.log("Dog is eating");
  }
}

class Cat extends Mammal {
  // child class
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("meow..");
  }
}
