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
  var vol = mic.getLevel();

  noStroke();
  boomBall();
  console.log(counter);
}


function boomBall(size) {
  var vol = mic.getLevel();
  var micSize = vol*1000;
  
  noStroke(0);
  
  push();
    translate(width/2, height/2);
    fill(10*micSize+22, 50*micSize, 5*micSize);
    ellipse(0,0, 200+micSize);
  pop();
  
  push();
    translate(width/2, height/2);
    fill(10*micSize, 100+micSize, 5*micSize);
    ellipse(0,0, 130+micSize);
  pop();
  
  push();
    translate(width/2, height/2);
    fill(10*micSize, 200-micSize, 5*micSize);
    ellipse(0,0, 50+micSize);
  pop();
  
  console.log(micSize);
}