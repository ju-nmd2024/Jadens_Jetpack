/*
This is Jaden's Jetpack which is my version of a lunar lander game.
Made by Emil Eriksson
*/

//Game state and gravity
let state = "start";
let velocity = 0.4;
let acceleration = 0.2;

//Character
let characterX = 1160;
let characterY = -350;

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

function character(x, y) {
  scale(0.4);
  strokeWeight(2);

  //Jetpack centerpiece
  fill(200);
  rect(x - 18, y, 225, 180, 2);

  //Left jetpack flames
  if (keyIsDown(32)) {
    push();
    noStroke();
    fill(220, 59, 24);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  } else {
    push();
    translate(0, -10);
    noStroke();
    fill(242, 143, 10);
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
    fill(220, 59, 24);
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
    fill(242, 143, 10);
    translate(360, 0);
    triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
    triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
    triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
    triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
    pop();
  }

  //Left jetpack thruster
  fill(119);
  rect(x - 115, y + 166, 60, 15);

  //Right jetpack thruster
  fill(119);
  rect(x + 245, y + 166, 60, 15);

  //Left jetpack wing
  fill(200);
  triangle(x - 18, y + 2, x - 140, y + 170, x + 230, y + 170);

  //Right jetpack wing
  triangle(x + 207, y + 2, x + 330, y + 170, x - 34, y + 170);

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
  fill(200);
  beginShape();
  vertex(x + 14, y + 2);
  vertex(x + 14, y + 120);
  vertex(x, y + 130);
  vertex(x, y + 144);
  vertex(x + 25, y + 125);
  vertex(x + 25, y + 2);
  endShape();

  //Middle strap
  beginShape();
  vertex(x + 25, y + 125);
  vertex(x + 165, y + 125);
  vertex(x + 165, y + 117);
  vertex(x + 25, y + 117);
  vertex(x + 25, y + 125);
  endShape();

  //Right strap
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
    fill(100);
    strokeWeight(4);
    line(x + 18, y - 60, x + 173, y - 60);
    strokeWeight(7);

    //Left lens
    ellipse(x + 60, y - 60, 40);
    ellipse(x + 60, y - 60, 45, 40);

    //Right lens
    ellipse(x + 130, y - 60, 40);
    ellipse(x + 130, y - 60, 45, 40);
    pop();

    //Red X left
    push();
    strokeWeight(7);
    stroke(255, 0, 0);
    line(x + 40, y - 80, x + 80, y - 40);
    line(x + 80, y - 80, x + 40, y - 40);
    pop();

    //Red X right
    push();
    translate(70, 0);
    strokeWeight(7);
    stroke(255, 0, 0);
    line(x + 40, y - 80, x + 80, y - 40);
    line(x + 80, y - 80, x + 40, y - 40);
    pop();
  } else {
    push();
    fill(100);
    strokeWeight(4);
    line(x + 18, y - 60, x + 173, y - 60);
    strokeWeight(7);

    //Left lens
    ellipse(x + 60, y - 60, 40);
    ellipse(x + 60, y - 60, 45, 40);

    //Right lens
    ellipse(x + 130, y - 60, 40);
    ellipse(x + 130, y - 60, 45, 40);
    pop();

    //Mouth
    fill(234, 118, 118);
    ellipse(x + 95, y, 30, 20);
    pop();
  }
}

function cloudLeft(x, y) {
  push();
  translate(880, 150);
  fill(255);
  scale(1.8);
  noStroke();
  ellipse(x - 5, y - 57, 50);
  ellipse(x - 25, y - 55, 40);
  rect(x - 60, y - 60, 90, 40, 30);
  pop();
}

function cloudRight(x, y) {
  push();
  translate(880, 150);
  fill(255);
  scale(1.8);
  noStroke();
  ellipse(x - 26, y - 57, 50);
  ellipse(x - 5, y - 55, 40);
  rect(x - 60, y - 60, 90, 40, 30);
  pop();
}

function bird(x, y) {
  push();
  translate(22, 170);
  scale(0.15);
  strokeWeight(15);
  noFill();
  beginShape();
  vertex(x - 60, y - 10);
  bezierVertex(x - 70, y - 20, x - 50, y - 120, x + 40, y + 50);
  bezierVertex(x + 40, y + 50, x + 130, y - 120, x + 145, y);
  endShape();
  pop();
}

function draw() {
  //Game state logic
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

  //Height limit
  if (characterY <= -400) {
    characterY = -400;
    velocity = 0.4;
    acceleration = 0.2;
  }

  //Checks for win condition
  if (velocity <= 5 && characterY > 939 && state === "game") {
    velocity = 0;
    acceleration = 0;
    state = "resultWin";
  } else if (velocity > 5 && characterY > 939) {
    state = "resultLose";
  }
}

function startScreen() {
  velocity = 0;
  //Background
  background(103, 187, 219);

  //Title text background
  push();
  fill(0);
  rectMode(CENTER);
  rect(500, 275, 640, 70, 10);
  pop();

  //Title text
  push();
  fill(255);
  textSize(70);
  text("JADEN'S JETPACK", 500, 300);
  pop();

  if (mouseX >= 425 && mouseX <= 575 && mouseY >= 333 && mouseY <= 380) {
    //Start button background hover
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200);
    rect(500, 360, 150, 50, 10);
    pop();

    //Start button text hover
    push();
    textSize(buttonText.start);
    text("START", 500, 375);
    pop();
  } else {
    //Start button background
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    rect(500, 360, 150, 50, 10);
    pop();

    //Start button text
    push();
    textSize(buttonText.start);
    text("START", 500, 375);
    pop();
  }

  //Game description box
  push();
  rectMode(CENTER);
  strokeWeight(2);
  rect(500, 480, 368, 140, 10);
  pop();

  //Game description text
  push();
  textSize(20);
  textAlign(LEFT);
  text(
    "Jaden invented a jetpack and took it for a test ride. There's only one problem: he doesn't know how to land! Use the spacebar to control the jetpack thrust and help him land safely.",
    325,
    420,
    362
  );
  pop();

  //Clouds
  cloudLeft(-400, 30);
  cloudLeft(-290, 2);
  cloudRight(0, 10);

  //Birds
  for (let i = 0; i < 5; i++) {
    bird(i * 200, i * 100, 20, 20);
  }
  push();
  translate(240, 0);
  for (let i = 0; i < 5; i++) {
    bird(i * -200, i * 100, 20, 20);
  }
  pop();

  //Grass
  push();
  noStroke();
  fill(55, 174, 15);
  rect(0, 563, 1000, 120);
  pop();
}

function gameScreen() {
  //Background
  push();
  background(103, 187, 219);

  //Birds
  for (let i = 0; i < 5; i++) {
    bird(i * 200, i * 100, 20, 20);
  }
  push();
  translate(240, 0);
  for (let i = 0; i < 5; i++) {
    bird(i * -200, i * 100, 20, 20);
  }
  pop();

  //Clouds
  cloudLeft(-400, 30);
  cloudLeft(-290, 2);
  cloudRight(0, 10);

  //Character
  character(characterX, characterY);

  //Menu button
  if (mouseX >= 925 && mouseX <= 994 && mouseY >= 5 && mouseY <= 28) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200);
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

  //Grass
  push();
  noStroke();
  fill(55, 174, 15);
  rect(0, 563, 1000, 120);
  pop();
}

function resultScreenWin() {
  velocity = 0;
  push();
  //Background
  background(103, 187, 219);

  //Menu button
  if (mouseX >= 925 && mouseX <= 994 && mouseY >= 5 && mouseY <= 28) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200);
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

  //Clouds
  cloudLeft(-400, 30);
  cloudLeft(-290, 2);
  cloudRight(0, 10);

  //Birds
  for (let i = 0; i < 5; i++) {
    bird(i * 200, i * 100, 20, 20);
  }
  push();
  translate(240, 0);
  for (let i = 0; i < 5; i++) {
    bird(i * -200, i * 100, 20, 20);
  }
  pop();

  //Big win text
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 180, 0);
  rect(500, 175, 340, 100, 10);
  pop();
  push();
  fill(255);
  textSize(resultText.big);
  text("GOOD JOB", 500, 180);
  pop();

  //Small win text
  push();
  fill(255);
  textSize(resultText.small);
  text("That landing was smooth!", 500, 210);
  pop();

  //Restart button
  if (mouseX >= 435 && mouseX <= 595 && mouseY >= 255 && mouseY <= 300) {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(200);
    rect(500, 280, 160, 45, 10);
    pop();
    push();
    textSize(buttonText.restart);
    text("RESTART", 500, 292);
    pop();
  } else {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    fill(255);
    rect(500, 280, 160, 45, 10);
    pop();
    push();
    textSize(buttonText.restart);
    text("RESTART", 500, 292);
    pop();
  }

  //Character
  push();
  character(characterX, 939);
  pop();

  //Grass
  push();
  noStroke();
  fill(55, 174, 15);
  rect(0, 563, 1000, 120);
  pop();

  //Tip message
  push();
  strokeWeight(2);
  rect(40, 600, 352, 40, 10);
  textSize(18);
  text("Tip: Pressing the C key restarts the game", 215, 625);
  pop();
}

function resultScreenLose() {
  push();
  //Sky
  background(103, 187, 219);

  //Birds
  for (let i = 0; i < 5; i++) {
    bird(i * 200, i * 100, 20, 20);
  }
  push();
  translate(240, 0);
  for (let i = 0; i < 5; i++) {
    bird(i * -200, i * 100, 20, 20);
  }
  pop();

  //Clouds
  cloudLeft(-400, 30);
  cloudLeft(-290, 2);
  cloudRight(0, 10);

  //Grass
  push();
  noStroke();
  fill(55, 174, 15);
  rect(0, 563, 1000, 120);
  pop();

  //Character
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
  rect(500, 175, 460, 100, 10);
  push();
  fill(255);
  textSize(resultText.big);
  text("YOU CRASHED", 500, 180);
  pop();
  pop();

  //Small lose text
  push();
  fill(255);
  textSize(resultText.small);
  text("That landing was... interesting", 500, 210);
  pop();

  //Restart button
  if (mouseX >= 435 && mouseX <= 595 && mouseY >= 255 && mouseY <= 300) {
    push();
    rectMode(CENTER);
    fill(200, 200, 200);
    strokeWeight(2);
    rect(500, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", 500, 292);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    strokeWeight(2);
    rect(500, 280, 160, 45, 10);
    pop();
    textSize(buttonText.restart);
    text("RESTART", 500, 292);
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

  //Tip message
  push();
  strokeWeight(2);
  rect(40, 600, 352, 40, 10);
  textSize(18);
  text("Tip: Pressing the C key restarts the game", 215, 625);
  pop();
}

function mouseClicked() {
  //Swtiches between states if buttons are clicked
  if (
    state === "start" &&
    mouseX >= 425 &&
    mouseX <= 575 &&
    mouseY >= 333 &&
    mouseY <= 380
  ) {
    state = "game";
    characterY = -350;
    velocity = 0.4;
    acceleration = 0.2;
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
    characterY = -350;
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
    characterY = -350;
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
  ////Swtiches between states if the C key is pressed
  if (state === "start" && keyIsDown(67)) {
    state = "game";
    characterY = -350;
    velocity = 0.4;
    acceleration = 0.2;
  } else if (state === "resultWin" && keyIsDown(67)) {
    state = "game";
    characterY = -350;
    velocity = 0.4;
    acceleration = 0.2;
  } else if (state === "resultLose" && keyIsDown(67)) {
    state = "game";
    characterY = -350;
    velocity = 0.4;
    acceleration = 0.2;
  }
}
