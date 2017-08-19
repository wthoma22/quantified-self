var $ = require('jquery')

function Food(attrs) {
  this.id = food.id
  this.name = food.name
  this.calories = food.calories
}

function addFood(name, calories) {
  return $.ajax( {
    url: "http://localhost:3000/api/v1/foods",
    type: 'POST',
    dataType: "json",
    data: {food: {name: name, calories: calories}},
    error: function(error) {
      debugger
    }
  }).done(function(post) {
    return new Food(post)
  })
}

function getFood() {
  return $.ajax({
    url: "http://localhost:3000/api/v1/foods",
    type: 'GET',
    dataType:"json",
    error: function(error) {
      debugger
    }
  }).done(function(post){
    return post
  })
}

module.exports = {
  Food,
  addFood,
  getFood,
}
