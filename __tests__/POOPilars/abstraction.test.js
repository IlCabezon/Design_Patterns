// native
const assert = require('node:assert')
const { describe, test } = require('node:test')

// files
const { objects, classes } = require('../../POOPillars/abstraction')

describe('First way, using private methods inside public methods', () => {
  const { car } = objects
  test('The public method "publicStartEngine" should hide the functionality implementation', () => {
    assert.strictEqual(car.publicStartEngine(), 'Engine started for Toyota')
  })
})

describe('Second way, using a base class as constructor for others', () => {
  const { Animal, Dog, Cat, Bird } = classes
  const { bobby, snow, picky } = objects

  test('Bobb, Cat and Bird should be children of Animal', () => {
    assert.strictEqual(bobby instanceof Animal, true)
    assert.equal(snow instanceof Animal, true)
    assert.equal(picky instanceof Animal, true)
  })

  test('Method "makeSound" should be inherited on each children', () => {
    assert.equal(Boolean(bobby.makeSound), true)
    assert.equal(Boolean(snow.makeSound), true)
    assert.equal(Boolean(picky.makeSound), true)
  })

  test('Method "makeSound" must be overridden or throw an error', () => {
    assert.strictEqual(bobby.makeSound(), 'Woof!')

    try {
      
      picky.makeSound()
      
      // should not pass this way
      assert.strictEqual(false, true)
    } catch (err) {
      // should pass this way
      assert.strictEqual(true, true)
    }
  })
})
