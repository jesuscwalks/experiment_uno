//Hello
//Welcome to Atelier Experiment One by Rosh Leynes
//The program will initialize your microphone
//and the balls on screen will be affected by outisde noise

var mic;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
//draw audio reactive balls in a pattern
  background(220);
  counter = counter;

  noStroke();
  
  translate(100,100);
  push();
    ballRotate();
  pop();
  
  translate(200,0)
  push();
    ballRotate();
  pop();
  
  translate(0,200);
  push();
    ballRotate();
  pop();
  
  translate(-200,0);
  push();
    ballRotate();
  pop();
  
  translate(100,-100);
  push();
    ballRotate();
  pop();
  
  console.log(counter);
}

function ballRotate() {  
//creates group of audio reactive balls
  var vol = mic.getLevel();
  var micSize = vol*100;
  rotate(counter);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
  rotate(+89);
  drawBall(0,15+(micSize*5),30+(micSize*7),10);
}

function drawBall(xloc, yloc, size, num){
//create singular audio reactive ball
//code example based on p5js drawTarget example
  var vol = mic.getLevel();
  var micSize = vol*500; 
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*micSize*10, i*grayvalues+25, micSize*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}