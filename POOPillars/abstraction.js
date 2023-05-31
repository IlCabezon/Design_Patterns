// there are at least two ways to achieve abstraction in Javascript
// using "encapsulation" concept
// because abstract classes are not allowed on this language

// first way, using private method inside another public method

// in this example "#startEngine" is a private method, that isn't
// exposed outside "Vehicle" and the public method "publicStartEngine"
// is used to call private "#startEngine"
class Vehicle {
  constructor(brand) {
    this.brand = brand
  }

  #startEngine() {
    return `Engine started for ${this.brand}`
  }

  publicStartEngine() {
    return this.#startEngine()
  }
}

const car = new Vehicle('Toyota')
console.log(car.publicStartEngine())

// second way

// Create a base class with common properties and methods,
// and then use it as a prototype for other classes

// in this example the Animal will be a class with a constructor function
// that doesn't return anything
class Animal {
  constructor(name) {
    this.name = name
  }

  makeSound() {
    throw new Error('This method must be implemented in a child class')
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  makeSound() {
    return 'Woof!'
  }
}

class Cat extends Animal {
  // other way to declare constructor
  constructor(name) {
    super(name)
  }

  makeSound() {
    return 'Meow!'
  }
}

class Bird extends Animal {
  constructor(color, ...args) {
    super(...args)
    this.color = color
  }
}

const bobby = new Dog('Bobby')
const snow = new Cat('Snow')
const picky = new Bird('Picky')

//console.log(bobby.makeSound())
//console.log(snow.makeSound)

// must throw an error
//console.log(picky.makeSound())

module.exports = {
  classes: {
    Animal,
    Dog,
    Cat,
    Bird,
  },
  objects: {
    car,
    bobby,
    snow,
    picky,
  },
}

