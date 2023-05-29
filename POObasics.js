// classes

// class name

// superclass
class Organism {
  // fields => state
  constructor(name, sex, age) {
    this.name = name
    this.sex = sex
    this.age = age
  }

  // methods => behavior
  doBiologicProcess(process) {
    return `doing ${process}`
  }
}

// subclass of Organism
class Animal extends Organism {
  constructor(isDomesticable, ...args) {
    super(...args)
    this.isDomesticable = isDomesticable
  }

  goTo(position) {
    return `Going to ${position}`
  }
}

// subclass of Organism
// superclass
class Plant extends Organism {
  constructor(biome, ...args) {
    super(...args)
    this.biome = biome
  }

  doPhotosynthesis() {
    return 'Doing photosynthesis'
  }
}

class Dog extends Animal {
  constructor(bestFriend, isDomesticable, name, sex, age) {
    super(isDomesticable, name, sex, age)
    this.bestFriend = bestFriend
  }

  bark() {
    return 'wof'
  }
}

class Cat extends Animal {
  constructor(isNasty, isDomesticable, name, sex, age) {
    super(isDomesticable, name, sex, age)
    this.isNasty = isNasty
  }
  meow() {
    console.log('meow')
  }
}

class Tree extends Plant {
  constructor(canBeClimbed, biome, name, sex, age) {
    super(biome, name, sex, age)
    this.canBeClimbed = canBeClimbed
  }

  climb() {
    if (this.canBeClimbed) {
      return `${this.name} climbed`
    } else {
      return `${this.name} cannot be climbed`
    }
  }
}

// Created objects based each class
const Sauce = new Tree(false, 'tropical', 'sauce', 'male', 120)
const Luna = new Cat(false, true, 'luna', 'female', 2)
const Bobby = new Dog('human', true, 'bobby', 'male', 4)

// Run script `run debug` for logs
console.log(Bobby.bestFriend)

module.exports = {
  classes: [Organism, Animal, Plant, Dog, Cat, Tree],
  objects: {
    Sauce,
    Luna,
    Bobby,
  },
}
