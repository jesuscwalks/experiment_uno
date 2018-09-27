//Hello Welcome to my Assignment for Experiment 1
//The glowing balls will react to sound 
//and rotate around the mouse

var mic;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  counter = counter + 0.01;

  noStroke();
  translate(mouseX,mouseY);//balls will rotate around mouse
  ballRotate();
  console.log(counter);
  
}

function ballRotate() {  
//creates group of balls
  var vol = mic.getLevel();
  var micSize = vol*100;
  rotate(counter);
  drawBall(0,25,30,8);
  rotate(+89);
  drawBall(0,25,30,8);
  rotate(+89);
  drawBall(0,25,30,8);
  rotate(+89);
  drawBall(0,25,30,8);
  rotate(+89);
  drawBall(0,25,30,8);
  rotate(+89);
  drawBall(0,25,30,8);
}

function drawBall(xloc, yloc, size, num){ 
//create singular ball
//code built off p5js drawTarget function
  var vol = mic.getLevel();
  var micSize = vol*500; 
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*micSize*10, i*grayvalues+25, micSize*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}