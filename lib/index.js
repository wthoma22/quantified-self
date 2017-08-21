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

//   $('.filter-food').on('click', function(event) {
//     event.preventDefault()
//     let foodItem = $('.filter-prompt').val().toLowerCase()
//     refreshTable(foodItem)
//   })
//
//   function refreshTable(foodItem) {
//   $('.foods-table').find("td:gt(0)").remove()
//   let filter = foodItem
//   $('.foods-table').append('<tr><td>' + filter.name + '</td><td>' + filter.calories + '</td></tr>')
// }

$('.filter-food').on('click', filterFoods)

function filterFoods(){
  let filter = $('.filter-prompt').val().toLowerCase()
  let foods = $('.food')

  for(var i=0; i < foods.length; i++){
    let foodName = $(foods[i]).text()
    let matchedFilter = foodName.toLowerCase().indexOf(filter) > -1
    foods[i].parentElement.style.display = matchedFilter ? "" : "none"
  }
}

  function appendFoodList(foodItem) {
    $('#foods-table').append('<tr><td class="food">' + foodItem.name + '</td><td>' + foodItem.calories +
  `<td><input type="image" class="btn-remove-item" id=${foodItem.id} + src="public/delete-record-md.png" + /></td></tr>`)
  }

  // TURN OFF CORS IN CHROME??
  $('#foods-table').on('click', '.btn-remove-item', function() {
    food.deleteFood(this.id)
  })

})
