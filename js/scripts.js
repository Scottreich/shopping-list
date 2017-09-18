$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var foods = ["food1", "food2", "food3", "food4", "food5"]

  foods.forEach(function(food) {
    var userInput = $("input#" + food).val();
    $("#groceries").append(userInput);

    $("#formOne").hide();
    $("#groceries").removeClass();

    event.preventDefault();

  });
});
});
