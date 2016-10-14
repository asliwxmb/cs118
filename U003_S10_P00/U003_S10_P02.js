// GLOBALS
var globalX = 65;
var globalY = 400;
var houseLength = sideOfHouseLength(120);

// Set color 
setRandomVisibleColour();

// Initial Reset
resetTurtle ();

// ---------------------------------
// Begin Functions
drawHouse(houseLength);
drawDoor(houseLength);
drawChimney (houseLength);
draw2ndFloor(houseLength);
drawWindow(houseLength,20);
drawWindow(houseLength,60);
drawWindow(houseLength,100);
drawWindow(houseLength/2,20);
drawWindow(houseLength/2,60);
drawWindow(houseLength/2,100);

drawTree(houseLength,1);

// ---------------------------------



// ---------------------------------
//
//          drawTriangle 
// 
// ---------------------------------
function drawTriangle(length) {
  for (var count = 0; count < 4; count++){
    moveForward(length);
    turnRight(120);
  }
}

// ---------------------------------
//
//          drawSquare 
// 
// ---------------------------------
function drawSquare(length){
  for (var count=0; count < 4; count++){
    moveForward(length);
    turnRight(90);
  }
}

// ---------------------------------
//
//          setRandomVisibleColour 
// 
// ---------------------------------
  function setRandomVisibleColour () {
var num = Math.floor(Math.random() * Math.pow(2, 24));
    // Make sure at least one component is below 0x80 and the rest
 // below 0xA0, to prevent too light of colours.
num &= 0x9f7f9f;
var color = '#' + ('00000' + num.toString(16)).substr(-6);
penColor(color);
  }
  
// ---------------------------------
//
//          drawHouse
// 
// ---------------------------------  
  function drawHouse (length){
    penDown();
    drawSquare(length);
    moveForward(length);
    turnRight(30);
    drawTriangle(length);
    turnRight(60);
    moveForward(length);

  }
  
// ---------------------------------
//
//          drawSnowman
// 
// ---------------------------------
function drawSnowman (height){
  turnLeft(90);
  var distances = [height *0.5,height *0.3,height*0.2];
  for (var i =0; i < 6;i++){
    var distance = distances [i < 3 ? i : 5 - i]/57.5;
    for (var d=0; d< 180;d +=2) {
      moveForward (distance);
      turnRight(2);
    
    }
    if (i !== 2){
      turnRight(180);
    }
  }
  turnLeft(90);
}
// ---------------------------------
//
//          drawsnowMan2
// 
// ---------------------------------
function drawSnowman2 (){
  turnLeft(90);
  // draw snowMan with heights of 110,100,90,80,70
  for (var height = 110; height >= 70; height -= 10){
    drawSnowman (height);
    turnRight (90);
    moveForward(60);
    turnLeft(90);
  }
}

// ---------------------------------
//
//          drawCircle 
// 
// ---------------------------------
function drawCircle (){
  for (var count =0;count < 360;count++){
    moveForward(1);
    turnRight(1);
  }
}

// ---------------------------------
//
//          drawDoor
// 
// ---------------------------------
function drawDoor(houseLength) {

  resetTurtle();
  

  
  var distances = [houseLength / 2,houseLength /4,houseLength /8,houseLength /4];
  turnRight (90);
  moveForward (distances[0]);
for (var i=1 ; i < 4;i++){
    turnLeft(90);
    moveForward (distances[i]);
}

  
}
// ---------------------------------
//
//          drawChimney
// 
// ---------------------------------
function drawChimney (houseLength) {
  
  // Should think about writing a function like gotoChimneyStart() that places 
  // The turtle in the correct position in order that it can draw the chimney.
  // Since we know where the beginning is with resetTurtle 
  resetTurtle();
  var distances = [houseLength / 2,houseLength / 2 ,houseLength / 6,houseLength / 5];
  
  // gotoChimneyStart BEGIN
  moveForward(houseLength);
  turnRight(30);
  moveForward(houseLength/2);
  turnTo(0);
// gotoChimneyStart BEGIN


for (var i=1 ; i < 4;i++){

    moveForward (distances[i]);
    turnRight(90);    
}
  
 
  
  
}

// ---------------------------------
//
//  @Function:       resetTurtle
//  @TODO:           Want to make them default if not set.
//  @Comment:        Resets turtle location to using globalX, globalY
// ---------------------------------

function resetTurtle (x,y){

 x = globalX;
 y = globalY;
 
  penUp();
  moveTo (globalX,globalY);
  turnTo (0);
  penDown();
}
// ---------------------------------
//
//          sideOfHouseLength 
// 
//  Sets the length of 1 side of the house and roof.
// ---------------------------------
function sideOfHouseLength (length){
  return length;
}




// ---------------------------------
//
//          draw2ndFloor 
//
//  Draw's 2nd Floor of House
// 
// ---------------------------------
function draw2ndFloor (length){
  resetTurtle();
  moveTo2ndFloor(length);
  
  turnRight (90);
  moveForward (length);
  
}

function moveTo2ndFloor (length) {
 resetTurtle ();
  penUp();
  moveForward (length / 2);

  penDown();
}

function drawWindow (length,offset) {
  resetTurtle();
  moveTo2ndFloor (length,offset);
  penDown();


  var xs = [0,0,length/10,0];
  var ys = [0,-(length/10),0,length/10,-(length/10)];
  for (var i=0; i < 4 ; i++){
    
  move (xs[i],ys[i]);  
  drawWindowSquare(length);

  }
  
}

function drawWindowSquare (length){
  for (var i = 0; i < 4; i++) {
  moveForward (length / 10);
  turnLeft (90);
    
  }
}

function moveTo2ndFloor (length,offset){
  resetTurtle();
  penUp();
  moveForward (length/2);
  moveForward (length/6);
  turnRight(90);
  moveForward (offset);
  turnTo (0);
}

function drawTree (length,offset){
  var branchlen = 75;
  resetTurtle ();
  penUp();
  moveToTreeLocation (-30,0);
  turnLeft(90);
  turnTo(0);
  moveBackward(100);
  turnTo(180);
  penColor("green");
  penDown();
  
  
  tree (branchlen);
}

function tree (branchLen){
   
        moveForward(branchLen);
        turnRight(20);
        tree(branchLen-15);
        turnLeft(40);
        tree(branchLen-15);
        turnRight(20);
        moveBackward(branchLen);

}

function moveToTreeLocation (x,y) {
  move (x,y);
}







