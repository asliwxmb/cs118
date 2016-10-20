function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}

function draw_a_circle() {
  for (var count2 = 0; count2 < 360; count2++) {
    moveForward(1);
    turnRight(1);
  }
}

draw_a_square();

