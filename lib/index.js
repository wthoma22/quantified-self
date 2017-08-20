const $ = require('jquery')
const food = require("./models/food")
let foodCollection

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
    .then(function(foodItem) {
      appendFoodList(foodItem)
    })
  })

  // WIP FILter coming into function but page is not changing

  $('.filter-food').on('click', function(event) {
    event.preventDefault()
    let foodItem = $('.filter-prompt').val().toLowerCase()
    refreshTable(foodItem)
  })

  function refreshTable(foodItem) {
  $('.foods-table').find("td:gt(0)").remove()
  let filter = foodItem
  $('.foods-table').append('<tr><td>' + filter.name + '</td><td>' + filter.calories + '</td></tr>')
}

  function appendFoodList(foodItem) {
    $('#foods-table').append('<tr><td>' + foodItem.name + '</td><td>' + foodItem.calories + '</td></tr>')
  }

  $('#foods-table').on('click', '.delete', function() {
    food.deleteFood(this.id)
  })

})
