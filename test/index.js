const assert = require('chai').assert
const Food = require('../lib/models/food')

// Writing tests in es6 for practice
describe('Food', () => {
  context('when created', () => {
    it('it is a food', () => {
      const myFood = new Food.Food({name: "apple", calories: 150})
      assert.instanceOf(myFood, Food.Food)
    })

    it('it has a name', () => {
      const myFood = new Food.Food({name: "apple", calories: 150})
      assert.equal(myFood.name, "apple")
    })

    it('it has calories', () => {
      const myFood = new Food.Food({name: "apple", calories: 150})
      assert.equal(myFood.calories, 150)
    })
  })
})
