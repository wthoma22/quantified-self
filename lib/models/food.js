var $ = require('jquery')

function Food(attrs) {
  this.id = food.id
  this.name = food.name
  this.calories = food.calories
}

function addFood(name, calories) {
  return $.ajax( {
    type: 'POST',
    url: "http://localhost:3000/api/v1/foods",
    dataType: "json",
    data: {food: {name: name, calories: calories}},
    error: function(error) {
    }
  }).done(function(post) {
    return new Food(post)
  })
}

function getFood() {
  return $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/v1/foods",
    dataType:"json",
    error: function(error) {
      console.log(error)
    }
  }).done(function(post){
    return post
  })
}

function deleteFood(id) {
  return $.ajax( {
    url: "http://localhost:3000/api/v1/foods/" + id,
    type: 'DELETE',
    dataType: "json",
    error: function(error) {
      console.log(error)
    }
  }).done(function(post) {
    console.log(post)
  })
}

module.exports = {
  Food,
  addFood,
  getFood,
  deleteFood
}
