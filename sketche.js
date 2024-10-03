function setup() {
  createCanvas(400, 400);
  background("gray");
}

function draw() {
  stroke("red");
fill("red");
  
   if (mouseIsPressed){
   rect(mouseX, mouseY, 20, 35)
}
}
