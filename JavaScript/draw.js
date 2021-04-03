

//To change the background color you have to either click the new canvas button, or double click anywhere in the document if double click clear is enabled.


var obj = {
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
    eraserWidthSlider: createSlider(1, 100, 50),
    backgroundSlider: createSlider(1,255,255)
  }
  sliders.eraserWidthSlider.position(220, 68)
  sliders.widthSlider.position(220, 98)
  sliders.redSlider.position(20,40)
  sliders.blueSlider.position(20,70)
  sliders.greenSlider.position(20,98)
  sliders.backgroundSlider.position(220,40)
  
  createCanvas(obj.scrWidth, 920);

}

$(document).ready(function(){
  eraseToggle = 0 // will toggle between 0 and 1 to determine if erase is enabled or disabled.
  eraseDblClick = 0
    window.addEventListener('resize', function(){ // clears canvas whenever screen is resized
      createCanvas(window.innerWidth - 20, 920);
      background(sliders.backgroundSlider.value())
    })


  $(".blank").click(function(){ //clears canvas whenever a user clicks the new canvas button
    createCanvas(window.innerWidth - 20, 920);
    background(sliders.backgroundSlider.value())
  })

  $(".dblce").click(function() { // enable/disables double click clear functionality
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

  $(document).dblclick(function(){ //clears canvas when user double clicks the canvas
    if(eraseDblClick == 0) {
      createCanvas(window.innerWidth - 20, 920);
      background(sliders.backgroundSlider.value())
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

  fill(sldr.r,sldr.g,sldr.b)

  scrCheckWidth()

  window.addEventListener("resize", function(){
    scrCheckWidth()
  })


   //draw with eraser if mouse is being pressed and eraseToggle is equal to 1
   if(mouseIsPressed && eraseToggle == 1) {
     
       strokeWeight(sliders.eraserWidthSlider.value())
       stroke(sliders.backgroundSlider.value())
       line(mouseX, mouseY, pmouseX, pmouseY);
     
    } else if(mouseIsPressed) {
      
       strokeWeight(sliders.widthSlider.value())    
       stroke(sldr.r,sldr.g,sldr.b)
       line(mouseX, mouseY, pmouseX, pmouseY);
      
    }
  
  
}
