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
function draw_a_triangle() {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(100);
    turnRight(120);
  }
}

draw_a_triangle();
draw_a_square();
draw_a_square();
