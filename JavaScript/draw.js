



//If canvas size feels small after resizing, try pressing the new canvas button.

obj = {
  scrWidth: window.innerWidth - 20,
  scrHeight: window.innerHeight - 20,
  colorBgrd: 200
}

function setup() {
  
  sliders = {
    redSlider: createSlider(0, 254, 0),
    blueSlider: createSlider(0, 254, 0),
    greenSlider: createSlider(0, 254, 0),
    widthSlider: createSlider(1, 50, 4),
    eraserWidthSlider: createSlider(1, 100, 50)
  }
  sliders.eraserWidthSlider.position(220, 68)
  sliders.widthSlider.position(220, 98)
  sliders.redSlider.position(20,40)
  sliders.blueSlider.position(20,70)
  sliders.greenSlider.position(20,98)
  createCanvas(obj.scrWidth, 920);
  background(obj.colorBgrd)

}

$(document).ready(function(){
eraseToggle = 0 // will toggle between 0 and 1 to determine if erase is enabled or disabled.
eraseDblClick = 0
//creates a new canvas and background (which will overide the previous canvas) when user clicks new canvas button

  window.addEventListener('resize', function(){
    createCanvas(window.innerWidth - 20, 920);
    background(obj.colorBgrd)
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
  background(obj.colorBgrd)
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
      // rgb color slider variable values
      var sldr = {
      r: sliders.redSlider.value(),
      g: sliders.blueSlider.value(),
      b: sliders.greenSlider.value()
      }
  noStroke()

const scrCheckWidth = () => { // function that checks screen width and adjusts color display according to your screen size.
    if(window.innerWidth >= 1367) {
      rect(133,0,53,39)
    } else {
      rect(143,0,53,39)
    }
  }
  fill(sldr.r,sldr.g,sldr.b) // fills rectangle with rgb slider variable values

  scrCheckWidth()

  window.addEventListener("resize", function(){ // calls scrCheckWidth whenever the resize event takes place.
    scrCheckWidth()
  })


   //draw with eraser if mouse is being pressed and eraseToggle is equal to 1
   if(mouseIsPressed && eraseToggle == 1) {
     strokeWeight(eraserWidthSlider.value())
       stroke(obj.colorBgrd)
       line(mouseX, mouseY, pmouseX, pmouseY);
    } else if(mouseIsPressed) { // If eraseToggle != 1 but the mouse is being pressed, draw with pen
    strokeWeight(sliders.widthSlider.value())
    
    stroke(sldr.r,sldr.g,sldr.b) // colors the pen with the rgb slider variable values
    line(mouseX, mouseY, pmouseX, pmouseY);

}
}