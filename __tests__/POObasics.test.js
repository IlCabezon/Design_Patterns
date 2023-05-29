// native
const assert = require('node:assert')
const { describe, test } = require('node:test')

// files
const POOBasics = require('../POObasics')

const classes = {}
// testing for types
for (const exportedClass of POOBasics.classes) {
  classes[exportedClass.name] = exportedClass
  test('All classes must be type of "function"', () => {
    assert.strictEqual(typeof exportedClass, 'function')
  })
  test('All classes must have name property', () => {
    assert.strictEqual(Boolean(exportedClass.name), true)
  })
}

const { Organism, Animal, Plant, Dog, Tree } = classes
// inheritance validation
describe('Objects created by Dog must be instance of Organism with their inherited methods and properties', () => {
  const { Bobby } = POOBasics.objects

  test('Object Bobby must be instance of Organism', () => {
    assert.equal(Bobby instanceof Organism, true)
  })
  test("Object Bobby must have 'doBiologicProcess' method inherited from their parent", () => {
    assert.equal(Boolean(Bobby.doBiologicProcess), true)

    const cellDivide = Bobby.doBiologicProcess('cell divide')
    assert.strictEqual(cellDivide, 'doing cell divide')
  })
  test("Object Bobby must have 'age' property inherited from Organism", () => {
    assert.strictEqual(Boolean(Bobby.age), true)
  })

  test('Object Bobby must be instance of Animal', () => {
    assert.strictEqual(Bobby instanceof Animal, true)
  })
  test('Object Bobby must have "goTo" method inherited from their parent', () => {
    assert.equal(Boolean(Bobby.goTo), true)

    const goToBed = Bobby.goTo('bed')
    assert.strictEqual(goToBed, 'Going to bed')
  })
  test('Object Bobby must have "isDomesticable" property inherited from Animal', () => {
    assert.strictEqual(Boolean(Bobby.isDomesticable), true)
  })

  test('Object Bobby must be instance of Dog', () => {
    assert.strictEqual(Bobby instanceof Dog, true)
  })
  test('Object Bobby must have "bark" method inherited from their parent', () => {
    assert.strictEqual(Boolean(Bobby.bark), true)
  })
  test('Object Bobby must have "bestFriend" property inherited from Dog', () => {
    assert.strictEqual(Bobby.bestFriend, 'human')
  })
})

describe('Object created by Plant must be instance of Organism with their inherited methods and properties', () => {
  const { Sauce } = POOBasics.objects

  test("Object Sauce must be instance of Organism", () => {
    assert.strictEqual(Sauce instanceof Organism, true)
  })
  test("Object Sauce must have 'doBiologicProcess' method inherited from Organism", () => {
    assert.strictEqual(Boolean(Sauce.doBiologicProcess), true)

    const cellDivide = Sauce.doBiologicProcess('cell divide')
    assert.strictEqual(cellDivide, 'doing cell divide')
  })
  test("Object Sauce must have 'age' property inherited from Organism", () => {
    assert.strictEqual(Boolean(Sauce.age), true)
  })

  test("Object Sauce must be instance of Plant", () => {
    assert.equal(Sauce instanceof Plant, true)
  })
  test("Object Sauce must have 'doPhotosynthesis' method inherited from Plant", () => {
    assert.strictEqual(Boolean(Sauce.doPhotosynthesis), true)

    const doingPhotosynthesis = Sauce.doPhotosynthesis()
    assert.strictEqual(doingPhotosynthesis, 'Doing photosynthesis')
  })
  test("Object Sauce musth have 'biome' property inherited from Plant", () => {
    assert.strictEqual(Boolean(Sauce.biome), true)
  })

  test("Object Sauce must be instance of Tree", () => {
    assert.equal(Sauce instanceof Tree, true)
  })
  test("Object Sauce must have 'climb' method inherited from Tree", () => {
    assert.strictEqual(Boolean(Sauce.climb), true)

    const climbing = Sauce.climb()
    assert.strictEqual(climbing, 'sauce cannot be climbed')
  })
  test("Object Sauce must have 'canBeClimbed' property inherited from Tree", () => {
    assert.notEqual(Boolean(Sauce.canBeClimbed), null)
    assert.notEqual(Boolean(Sauce.canBeClimbed), undefined)
  })
})
