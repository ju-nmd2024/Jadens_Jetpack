function setup() {
  createCanvas(800, 600);
}

function character(x, y, s) {
  scale(s);

  //Jetpack
  fill(119, 119, 119);
  rect(x - 18, y, 225, 180);

  //Left jetpack flames
  push();
  noStroke();
  fill(255, 0, 0);
  triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
  triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
  triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
  triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
  pop();

  //Left jetpack thruster
  fill(119, 119, 119);
  rect(x - 115, y + 166, 60, 15);

  //Right jetpack flames
  push();
  noStroke();
  fill(255, 0, 0);
  translate(360, 0);
  triangle(x - 110, y + 180, x - 90, y + 180, x - 100, y + 210);
  triangle(x - 100, y + 180, x - 80, y + 180, x - 90, y + 210);
  triangle(x - 90, y + 180, x - 70, y + 180, x - 80, y + 210);
  triangle(x - 80, y + 180, x - 60, y + 180, x - 70, y + 210);
  pop();

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
}

function draw() {
  background(255);
  character(200, 200, 0.4);
}