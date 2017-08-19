const $ = require('jquery')
const food = require("./models/food")
window['foods'] = []
window['filter'] = ""

$(document).ready(function() {

  $(function() {
    food.getFood()
    .then(function(foodList) {
      createTable(foodList)
    })
  })

  function createTable(foodList) {
    foods = foodList
    for (i = 0; i < foodList.length; i++) {
      appendFoodList(foodList[i])
    }
  }

  $(".add-food").on("click", function() {
    event.preventDefault()
    let name = $('.name-input').val()
    let calories = $('.calories-input').val()

    food.addFood(name, calories)
    .then(function(foodObject) {
      appendFoodList(foodObject)
    })
  })

  function appendFoodList(foodObject) {
    $('#foods-table').append('<tr><td>' + foodObject.name + '</td><td>' + foodObject.calories + '</td></tr>')
  }

  $('#foods-table').on('click', '.delete', function() {
    food.deleteFood(this.id)
  })

})
