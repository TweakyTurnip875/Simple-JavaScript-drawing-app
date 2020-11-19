



//If canvas size feels small after resizing, try pressing the new canvas button.



function setup() {

  slider = createSlider(0, 254, 0)
  slider2 = createSlider(0, 254, 0);
  slider3 = createSlider(0, 254, 0);
  widthSlider = createSlider(1, 50, 4)
  eraserWidthSlider = createSlider(1, 100, 50)
  eraserWidthSlider.position(220, 68)
  widthSlider.position(220, 98)
  slider.position(20,40)
  slider2.position(20,70)
  slider3.position(20,98)
  createCanvas(window.innerWidth - 20, 920);
  background(102)

}

$(document).ready(function(){
eraseToggle = 0 // will toggle between 0 and 1 to determine if erase is enabled or disabled.
eraseDblClick = 0
//creates a new canvas and background (which will overide the previous canvas) when user clicks new canvas button

  window.addEventListener('resize', function(){
    createCanvas(window.innerWidth - 20, 920);
    background(102)
  })


$(".blank").click(function(){
  createCanvas(window.innerWidth - 20, 920);
  background(102)
})
$(".dblce").click(function() {
  if(eraseDblClick == 1) {
    $(".dblce-toggle").text("enabled")
    eraseDblClick -= eraseDblClick
// console.log(eraseDblClick) 

  } else {
    $(".dblce-toggle").text("disabled")

    eraseDblClick++
    // console.log(eraseDblClick)

  }
})

$(document).dblclick(function(){
  if(eraseDblClick == 0) {
  createCanvas(window.innerWidth - 20, 920);
  background(102)
  }
})
//adds eraser functionality
$(".eraser").click(function(){
  if(eraseToggle >= 1) {
    eraseToggle -= eraseToggle 
    $(".toggle").text("off")
  } else {
  $(".toggle").text("on")
    
  eraseToggle++
  }

})
})
function draw() {
      // rgb color slider variables
      var r = slider.value(),
      g = slider2.value(),
      b = slider3.value()
  noStroke()

      
  fill(r,g,b) // fills rectangle with rgb slider variable values
    rect(143,0,53,39)
  
   //draw with eraser if mouse is being pressed and eraseToggle is equal to 1
   if(mouseIsPressed && eraseToggle == 1) {
     strokeWeight(eraserWidthSlider.value())
       stroke(102)
       line(mouseX, mouseY, pmouseX, pmouseY);
    } else if(mouseIsPressed) { // If eraseToggle != 1 but the mouse is being pressed, draw with pen
    strokeWeight(widthSlider.value())
    
    stroke(r,g,b) // colors the pen with the rgb slider variable values
    line(mouseX, mouseY, pmouseX, pmouseY);

}
}

