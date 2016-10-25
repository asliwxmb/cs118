/** https://studio.code.org/s/cspunit3/stage/12/puzzle/10
 * Improved Chaser Game

Now lets improve the "Chaser Game". This is where you get to use your creativity. Make it look nice!

In addition you will notice a new command in the toolbox: playsound! Read the documentation about how to add sounds.

Note: Your code from before has been provided for you.

Do This:
## 
#Requirement-01: Create a Welcome Screen that explains the rules of the game. 
#Requirement-02: Include a "Start Game" button.

#Requirement-03: Update the your code so that the image jumps to a new location when it is clicked.
#Requirement-04: Play a sound each time the image is clicked.
#Requirement-05: Make the user lose, by sending them to the Game Over Screen, when the background is clicked. 

#Requirement-06: Add a Game Over Screen with a lose message and button to start over. 

#Requirement-07: The Start Over Button should direct back to the Welcome Screen.




*/


var lives = 0;
var rings = 0;

// #Requirement-01
welcomeToGame();

function welcomeToGame () {
  setScreen("WelcomeScreenId");
}

// #Requirement-02
onEvent("startGameButtonId", "click", function(event) {
  console.log("startGameButtonId clicked!");
  playStartGameSound ();
  startGame();
});

// #Requirement-03,04,05 
function startGame() {
  setScreen ("GameScreenId");
  onEvent("bellId", "click",  eventCallBack );
  onEvent("GameScreenId", "click", eventCallBack );
}

function eventCallBack (event) {
  // _DEBUG
  console.log (event);
  if ((event.currentTargetId == "GameScreenId") && (event.srcElementId == "GameScreenId")){ // If GameScreenId only is clicked.
    gameOver();
    return;
  } else if ((event.srcElementId == "bellId") && (event.currentTargetId == "bellId")) { // if bellId only is clicked
      console.log ("xxx");
  // randomly move icon
  var XPosition = randomNumber(0, 200);
  var YPosition = randomNumber(0, 200);
  setPosition("bellId", XPosition, YPosition);
  // Count up number of rings
  rings++;
  // ring bell 
  ringBell();
  // _DEBUG
  console.log (rings);
  }
}




// gameover set screen to GaveOver 
// #Requirement-06
function gameOver (){
setScreen("GameOverScreenId");

// @TODO something about scoping event with function makes it work correctly.
// #Requirement-07
onEvent("RestartButtonId", "click", function(event) {
  // _DEBUG
  console.log("RestartButtonId clicked!");
  // Reset Game by going to Welcome function
  welcomeToGame();
});
}

// ring Bell 
function ringBell () {
  var sound_02 =   "https://audio.code.org/winpoint1.mp3";
  console.log ("ringBell");
}

function playStartGameSound() {
  // Start 1	Sound
  var sound_01 = "https://audio.code.org/start1.mp3";
  playSound(sound_01);
  

  
  /**
   * Sound	URL
   * Start 1	https://audio.code.org/start1.mp3
   * Start 2	https://audio.code.org/start2.mp3
   * Goal 1	https://audio.code.org/goal1.mp3
   * Goal 2	https://audio.code.org/goal2.mp3
   * Win point 1	https://audio.code.org/winpoint1.mp3
   * Win point 2	https://audio.code.org/winpoint2.mp3
   * Lose point 1	https://audio.code.org/losepoint1.mp3
   * Lose point 2	https://audio.code.org/losepoint2.mp3
   * Win 1	https://audio.code.org/win1.mp3
   * Win 2	https://audio.code.org/win2.mp3
   * Win 3	https://audio.code.org/win3.mp3
   * Failure 1	https://audio.code.org/failure1.mp3
   * Failure 2	https://audio.code.org/failure2.mp3
   * Failure 3	https://audio.code.org/failure3.mp3
*/
  
}





