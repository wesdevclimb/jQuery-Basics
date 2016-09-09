//problem: no capacity for user interaction
//solution: when user interacts, cause changes to appropriately

var color = $(".selected").css("background-color");
//when clicking on control list items
$(".controls li").click(function () {
  //deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked elements
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//when new color is pressed
  //show or hide color select based on display state

//when color sliders change
  //update new color span

//when add color is pressed
  //append the color to the controls ul
  //select the new color

//on mouse events on the canvas element
  //draw lines
