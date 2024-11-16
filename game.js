let state = "start";
let characterY = -200;
let velocity = 0.4;
let acceleration = 0.4;
let grassY = 563;

//Text
let startText = 40;
let resultText = {
  big: 60,
  small: 30,
};

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  textAlign(CENTER);
}

function startScreen() {
  background(200, 200, 200);
  push();
  textSize(65);
  text("JADEN'S JETPACK", 400, 280);
  pop();
  textSize(startText);
  text("START", 400, 340);
  velocity = 0;
}

function gameScreen() {
  background(135, 206, 235);
  push();
  noStroke();
  fill(19, 133, 16);
  rect(0, grassY, 800, 50);
  pop();
  character(900, characterY);
}

function resultScreenWin() {
  push();
  background(135, 206, 235);
  push();
  noStroke();
  fill(19, 133, 16);
  rect(0, grassY, 800, 50);
  pop();
  character(900, 939);

  //Big win text
  push();
  textSize(resultText.big);
  text("WELL DONE", 400, 150);
  pop();

  //Small win text
  push();
  textSize(resultText.small);
  text("That landing was smooth!", 400, 190);
  pop();

  //Restart text
  push();
  textSize(startText);
  text("RESTART", 400, 300);
  pop();
}

function resultScreenLose() {
  push();
  background(135, 206, 235);
  noStroke();
  fill(19, 133, 16);
  rect(0, grassY, 800, 50);
  pop();
  character(900, 939);

  //Big lose text
  textSize(resultText.big);
  text("YOU CRASHED", 400, 150);

  //Small lose text
  push();
  textSize(resultText.small);
  text("Better luck next time", 400, 190);
  pop();

  //Restart text
  textSize(startText);
  text("RESTART", 400, 300);
}

function character(x, y) {
  push();
  scale(0.4);

  //Jetpack
  fill(119, 119, 119);
  rect(x - 18, y, 225, 180);

  //Left jetpack flames
  if (keyIsDown(32)) {
    push();
    noStroke();
    fill(255, 0, 0);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  } else {
    push();
    translate(0, -10);
    noStroke();
    fill(251, 139, 35);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  }

  //Right jetpack flames
  if (keyIsDown(32)) {
    push();
    noStroke();
    fill(255, 0, 0);
    translate(360, 0);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  } else {
    push();
    translate(0, -10);
    noStroke();
    fill(251, 139, 35);
    translate(360, 0);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  }

  //Left jetpack thruster
  fill(119, 119, 119);
  rect(x - 115, y + 166, 60, 15);

  //Right jetpack thruster
  fill(119, 119, 119);
  rect(x + 245, y + 166, 60, 15);

  //Jetpack wings
  push();
  fill(200, 200, 200);
  triangle(x - 18, y, x - 140, y + 170, x - 18, y + 170);
  triangle(x + 207, y, x + 330, y + 170, x + 207, y + 170);
  pop();

  //Left arm
  push();
  translate(x - 132, y - 440);
  rotate(0.2);
  fill(224, 172, 105);
  ellipse(238, 618, 30);
  fill(6, 64, 43);
  rect(220, 420, 35, 200);
  pop();

  //Right arm
  push();
  translate(x - 145, y - 349);
  rotate(-0.2);
  fill(224, 172, 105);
  ellipse(238, 618, 30);
  fill(6, 64, 43);
  rect(220, 420, 35, 200);
  pop();

  //Shirt
  push();
  fill(6, 64, 43);
  rect(x, y, 190, 270, 20, 20, 0);
  fill(224, 172, 105);
  pop();

  //Feet
  fill(0, 0, 0);
  ellipse(x + 48, y + 455, 80, 30);
  ellipse(x + 143, y + 455, 80, 30);

  //Pants
  push();
  fill(0, 100, 255);
  rect(x, y + 270, 190, 180);
  line(x, y + 270, x + 190, y + 270);
  line(x + 95, y + 320, x + 95, y + 448);
  pop();

  //Left strap
  push();
  fill(200, 200, 200);
  beginShape();
  vertex(x + 14, y + 2);
  vertex(x + 14, y + 120);
  vertex(x, y + 130);
  vertex(x, y + 144);
  vertex(x + 25, y + 125);
  vertex(x + 25, y + 2);
  endShape();

  //Middle strap
  fill(200, 200, 200);
  beginShape();
  vertex(x + 25, y + 125);
  vertex(x + 165, y + 125);
  vertex(x + 165, y + 117);
  vertex(x + 25, y + 117);
  vertex(x + 25, y + 125);
  endShape();

  //Right strap
  fill(200, 200, 200);
  beginShape();
  vertex(x + 166, y);
  vertex(x + 166, y + 125);
  vertex(x + 191, y + 144);
  vertex(x + 191, y + 132);
  vertex(x + 176, y + 120);
  vertex(x + 176, y + 2);
  endShape();
  pop();

  //Head
  push();
  fill(224, 172, 105);
  ellipse(x + 20, y - 45, 30);
  ellipse(x + 170, y - 45, 30);
  ellipse(x + 95, y - 50, 160, 170);
  pop();

  //Glasses
  push();
  strokeWeight(4);
  line(x + 18, y - 60, x + 173, y - 60);
  strokeWeight(7);
  fill(255, 255, 255);
  ellipse(x + 60, y - 60, 40);
  ellipse(x + 60, y - 60, 30);
  ellipse(x + 130, y - 60, 40);
  ellipse(x + 130, y - 60, 30);
  pop();

  //Mouth
  fill(234, 118, 118);
  ellipse(x + 95, y, 30, 20);
  pop();
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "resultWin") {
    resultScreenWin();
  } else if (state === "resultLose") {
    resultScreenLose();
  }

  //Gravity
  characterY += velocity;
  velocity += acceleration;

  //Jetpack control
  if (keyIsDown(32)) {
    velocity--;
  }

  //Checks for win condition
  if (velocity <= 12 && characterY >= 939) {
    velocity = 0;
    acceleration = 0;
    state = "resultWin";
  }

  //Checks for lose condition
  if (velocity >= 10 && characterY >= 939) {
    state = "resultLose";
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "resultWin") {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.4;
  } else if (state === "resultLose") {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.4;
  }
}
