let state = "start";
let velocity = 0.4;
let acceleration = 0.2;
let grassY = 563;

//Character
let characterX = 1190;
let characterY = -200;

//Text
let buttonText = {
  start: 40,
  restart: 30,
  menu: 18,
};
let resultText = {
  big: 60,
  small: 25,
};

function setup() {
  createCanvas(1000, 680);
  frameRate(60);
  textAlign(CENTER);
}

function startScreen() {
  velocity = 0;
  background(135, 206, 235);
  if (mouseX >= 440 && mouseX <= 590 && mouseY >= 375 && mouseY <= 425) {
    push();
    textSize(70);
    text("JADEN'S JETPACK", width / 2, 300);
    pop();
    push();
    push();
    fill(220, 220, 220);
    strokeWeight(2);
    rectMode(CENTER);
    rect(width / 2, 400, 150, 50, 10);
    pop();
    textSize(buttonText.start);
    text("START", width / 2, 414);
    pop();
  } else {
    push();
    textSize(70);
    text("JADEN'S JETPACK", width / 2, 300);
    pop();
    push();
    strokeWeight(2);
    rectMode(CENTER);
    rect(width / 2, 400, 150, 50, 10);
    textSize(buttonText.start);
    text("START", width / 2, 414);
    pop();
  }
}

function gameScreen() {
  push();
  background(135, 206, 235);

  //Grass
  fill(38, 139, 7);
  noStroke();
  rect(0, grassY, width, 120);
  pop();
  character(characterX, characterY);

  //Menu button
  if (mouseX >= 925 && mouseX <= 994 && mouseY >= 5 && mouseY <= 28) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200, 200, 200);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  } else {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  }
}

function resultScreenWin() {
  velocity = 0;
  push();
  background(135, 206, 235);
  //Grass
  noStroke();
  fill(38, 139, 7);
  rect(0, grassY, width, 120);
  pop();
  character(characterX, 939);
  push();
  rectMode(CENTER);
  rect(width / 2, 280, 160, 45, 10);
  pop();

  //Big win text
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 180, 0);
  rect(width / 2, 175, 380, 100, 10);
  push();
  fill(255);
  textSize(resultText.big);
  text("WELL DONE", width / 2, 180);
  pop();
  pop();

  //Small win text
  push();
  fill(255);
  textSize(resultText.small);
  text("That landing was smooth!", width / 2, 210);
  pop();

  //Restart button
  if (mouseX >= 435 && mouseX <= 595 && mouseY >= 255 && mouseY <= 300) {
    push();
    rectMode(CENTER);
    fill(200, 200, 200);
    strokeWeight(2);
    rect(width / 2, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", width / 2, 292);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    strokeWeight(2);
    rect(width / 2, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", width / 2, 292);
  }

  //Menu button
  if (mouseX >= 925 && mouseX <= 994 && mouseY >= 5 && mouseY <= 28) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200, 200, 200);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  } else {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  }
}

function resultScreenLose() {
  push();
  background(135, 206, 235);
  noStroke();
  fill(38, 139, 7);
  rect(0, grassY, width, 120);
  pop();
  push();
  translate(900, 0);
  scale(1);
  rotate(1.4);
  character(characterX, 939);
  pop();

  //Big lose text
  push();
  rectMode(CENTER);
  noStroke();
  fill(255, 0, 0);
  rect(width / 2, 175, 460, 100, 10);
  push();
  fill(255);
  textSize(resultText.big);
  text("YOU CRASHED", width / 2, 180);
  pop();
  pop();

  //Small lose text
  push();
  fill(255);
  textSize(resultText.small);
  text("Better luck next time", width / 2, 210);
  pop();

  //Restart button
  if (mouseX >= 435 && mouseX <= 595 && mouseY >= 255 && mouseY <= 300) {
    push();
    rectMode(CENTER);
    fill(200, 200, 200);
    strokeWeight(2);
    rect(width / 2, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", width / 2, 292);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    strokeWeight(2);
    rect(width / 2, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", width / 2, 292);
  }

  //Menu button
  if (mouseX >= 925 && mouseX <= 994 && mouseY >= 5 && mouseY <= 28) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200, 200, 200);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  } else {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    rect(960, 18, 70, 25, 10);
    pop();
    textSize(buttonText.menu);
    text("MENU", 960, 25);
  }
}

function character(x, y) {
  push();
  scale(0.4);
  strokeWeight(2);

  //Jetpack
  fill(200, 200, 200);
  rect(x - 18, y, 225, 180, 2);

  //Left jetpack flames
  if (keyIsDown(32)) {
    push();
    noStroke();
    fill(255, 64, 0);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  } else {
    push();
    translate(0, -10);
    noStroke();
    fill(255, 165, 0);
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
    fill(255, 64, 0);
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
    fill(255, 165, 0);
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
  //Left wing
  triangle(x - 18, y + 2, x - 140, y + 170, x + 230, y + 170);
  //Right wing
  triangle(x + 207, y + 2, x + 330, y + 170, x - 34, y + 170);
  pop();

  //Left arm
  push();
  translate(x - 132, y - 440);
  rotate(0.2);
  fill(224, 172, 105);
  ellipse(238, 618, 30);
  fill(23, 77, 36);
  rect(220, 420, 35, 200);
  pop();

  //Right arm
  push();
  translate(x - 145, y - 349);
  rotate(-0.2);
  fill(224, 172, 105);
  ellipse(238, 618, 30);
  fill(23, 77, 36);
  rect(220, 420, 35, 200);
  pop();

  //Shirt
  push();
  fill(23, 77, 36);
  rect(x, y, 190, 270, 20, 20, 0);
  pop();

  //Feet
  fill(0, 0, 0);
  arc(x + 48, y + 467, 90, 50, PI, TWO_PI, CHORD);
  arc(x + 143, y + 467, 90, 50, PI, TWO_PI, CHORD);

  //Pants
  push();
  fill(23, 77, 36);
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
  if (state === "resultLose") {
    push();
    strokeWeight(4);
    line(x + 18, y - 60, x + 173, y - 60);
    strokeWeight(7);
    fill(100, 100, 100);
    ellipse(x + 60, y - 60, 45, 40);
    ellipse(x + 130, y - 60, 45, 40);
    ellipse(x + 60, y - 60, 40);
    ellipse(x + 130, y - 60, 40);
    pop();
    push();
    strokeWeight(7);
    stroke(255, 0, 0);
    line(x + 40, y - 80, x + 80, y - 40);
    line(x + 80, y - 80, x + 40, y - 40);
    pop();
    push();
    translate(70, 0);
    strokeWeight(7);
    stroke(255, 0, 0);
    line(x + 40, y - 80, x + 80, y - 40);
    line(x + 80, y - 80, x + 40, y - 40);
    pop();
    pop();
  } else {
    push();
    strokeWeight(4);
    line(x + 18, y - 60, x + 173, y - 60);
    strokeWeight(7);
    fill(100, 100, 100);
    ellipse(x + 60, y - 60, 45, 40);
    ellipse(x + 130, y - 60, 45, 40);
    ellipse(x + 60, y - 60, 40);
    ellipse(x + 130, y - 60, 40);
    pop();

    //Mouth
    fill(234, 118, 118);
    ellipse(x + 95, y, 30, 20);
    pop();
  }
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
  if (velocity <= 9 && characterY >= 939 && state === "game") {
    velocity = 0;
    acceleration = 0;
    state = "resultWin";
  }

  //Checks for lose condition
  if (velocity >= 9 && characterY >= 939) {
    state = "resultLose";
  }
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 440 &&
    mouseX <= 590 &&
    mouseY >= 375 &&
    mouseY <= 425
  ) {
    state = "game";
  } else if (
    state === "game" &&
    mouseX >= 925 &&
    mouseX <= 994 &&
    mouseY >= 5 &&
    mouseY <= 28
  ) {
    state = "start";
  } else if (
    state === "resultWin" &&
    mouseX >= 435 &&
    mouseX <= 595 &&
    mouseY >= 255 &&
    mouseY <= 300
  ) {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.2;
  } else if (
    state === "resultLose" &&
    mouseX >= 435 &&
    mouseX <= 595 &&
    mouseY >= 255 &&
    mouseY <= 300
  ) {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.2;
  } else if (
    state === "resultWin" &&
    mouseX >= 925 &&
    mouseX <= 994 &&
    mouseY >= 5 &&
    mouseY <= 28
  ) {
    state = "start";
  } else if (
    state === "resultLose" &&
    mouseX >= 925 &&
    mouseX <= 994 &&
    mouseY >= 5 &&
    mouseY <= 28
  ) {
    state = "start";
  }
}

function keyPressed() {
  if (state === "start" && keyIsDown(32)) {
    state = "game";
  } else if (state === "resultWin" && keyIsDown(67)) {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.2;
  } else if (state === "resultLose" && keyIsDown(67)) {
    state = "game";
    characterY = -200;
    velocity = 0.4;
    acceleration = 0.2;
  }
}
