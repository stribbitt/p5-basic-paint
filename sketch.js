var newWidth = 50;
var newHeight = 50;
function setup(){
    createCanvas(600,400);
    background(30);
}

function draw(){
    // background(75);
    if(mouseIsPressed){
         noStroke();
    fill(10,200,2);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    }
   
}