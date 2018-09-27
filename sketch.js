var mic;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  counter = counter;

  noStroke();
  translate(width/2, height/2); //centre objects
  ballRotate();
  console.log(counter);
  
}

function ballRotate() {  
//creates 6 audio reactive balls
  var vol = mic.getLevel();
  var micSize = vol*100;
  rotate(counter);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),7);
}

function drawBall(xloc, yloc, size, num){
//create singular ball
//code based off p5js drawTarget example
  var vol = mic.getLevel();
  var micSize = vol*500; 
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*micSize*10, i*grayvalues+25, micSize*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}