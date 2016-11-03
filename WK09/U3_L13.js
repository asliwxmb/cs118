/**
 * Challenge: Keep the story going! Add more choices
 * and scenarios.
 */

/** screen1
 * READ text_area1:
 * It's the 2016 World Series,
 * It's game 7 between the Chicago Cubs and the Cleveland Indians. 
 * Who ever wins game 7 wins the world series. 
 * Who do think is going to win?
 * 
 *  Select who is going to win the world series
 *  Using the dropdown1 Choose one:
 *  Cleveland Indians 
 *  Chicago Cubs 
 * 
 * dropdown1
 * Choose one
 * Cleveland Indians -> goto screen2
 * Chicago Cubs      -> goto screen5
 */

// When the selected option of a dropdown has changed, show the next screen
// onEvent("dropdown1", "change", function(event) {
// set variables in order to make more dynamic
// if time.


var indians = "indians";
var cubs =    "cubs";
var indians_winner =  false;
var indians_loser =   true;
var indians_ws_1948 = "1948";
var indians_ws_2016 = "2016";

var cubs_winner = true;
var cubs_loser = false;
var cubs_ws_1908 = "1908";
var cubs_ws_2016 = "2016";

var cubs_usr_trivia_winner = true;
var indians_usr_trivia_winner = true;

var ws_winner   = cubs;
var ws_loser    = indians;

var user_worldseries_winner = "";

var user_worldseries_lastyear = "";

var userWSWinnerSelection = "???";
var userYearLastWonSelection = "???";

var userWSWinner= false;
var userYearWinner = false;

var userWSWinnerStatus = false;
var userWSYearLastWonStaus = false;

var userLastWonYear;
var userLastWonYearStatus = false;

var userIsAWinner = false; // Store whether th

var userWSWinnerSelection = "OOPS";
// scr01_chooseWinner_drdId



/**
 * --------------select a winner  SCREENS -----------
 */

onEvent("scr01_chooseWinner_drdId", "change", function(event) {
    console.log("Selected option: " + getText("scr01_chooseWinner_drdId"));
  var selected = getText("scr01_chooseWinner_drdId");
    if (indians == selected ){
      userWSWinnerSelection = selected;  
      userWSWinnerSelection = setUserWorldSeriesWinner(userWSWinnerSelection);  // set the user WS selection 
      console.log ("uws"+userWSWinnerSelection);
      userWSWinnerStatus    = checkUserWorldSeriesStatus (userWSWinnerSelection); 
      setScreen("scr02_indiansTrivia_srcId"); // Goto Indians trivia screen
      
  } else if (cubs == selected ) {
      userWSWinnerSelection = selected;      
      userWSWinnerSelection = setUserWorldSeriesWinner(userWSWinnerSelection);  // set the user WS selection 
      userWSWinnerStatus    = checkUserWorldSeriesStatus (userWSWinnerSelection); 
    
      setScreen("scr03_cubsTrivia_scrId");
  }
});


/**
 * --------------TRIVIA SCREENS -----------
 */
 
/** 
 * scr02_indiansTrivia_scrId
 * scr02_indiansText_txaId
 * scr02_indiansImg_imgId
 * scr02_indiansYear_drdId
 */


onEvent("scr02_indiansYear_drdId", "change", function(event) {
  console.log("Selected option: " + getText("scr02_indiansYear_drdId"));
  
  userLastWonYear =getText("scr02_indiansYear_drdId"); 
  userLastWonYearStatus = checkWorldSeriesYearLastWon (userWSWinnerSelection, userLastWonYear);
  console.log ("The User selected the year " + userLastWonYear + " when the " + userWSWinnerSelection + " last won the world series");
  displayUserResults (userWSWinnerStatus, userWSWinnerSelection, userLastWonYearStatus,userLastWonYear );
});

onEvent("scr03_cubsYear_drdId", "change", function(event) {
  userLastWonYear = getText("scr03_cubsYear_drdId"); 
  userLastWonYearStatus = checkWorldSeriesYearLastWon (userWSWinnerSelection, userLastWonYear);
  console.log ("The User selected the year " + userLastWonYear + " when the " + userWSWinnerSelection + " last won the world series");
  displayUserResults (userWSWinnerStatus, userWSWinnerSelection, userLastWonYearStatus,userLastWonYear );
});







/**
 * utility function to reset
 */
 

// Buttons at the end of will start the game over
function startOver () {
  setText("scr03_cubsYear_drdId", "Choose one");
  setText("scr01_chooseWinner_drdId", "Choose one");
  setText("scr03_cubsYear_drdId", "Choose one");
  setScreen("scr01_selectWinner_scrId");
}


function getWorldSeriesWinner () {
  console.log ("function getWorldSeriesWinner called");
  
  return ws_winner;
}

function getWorldSeriesLoser () {
  return ws_loser;
}

function checkWorldSeriesYearLastWon (teamname,year) {
  if (teamname == "indians" && year == "1948") {
  userWSYearLastWonStaus = true;
  }
  else if (teamname == "cubs" && year == "1908") {
     userWSYearLastWonStaus = true;
  } else {
     userWSYearLastWonStaus = false;
  }
  return  userWSYearLastWonStaus;
  }

function setUserWSWinner(teamname) {
   var status = false;
  
    if (teamname == "indians") {
     status = false;
  }
  else if (teamname == "cubs") {
     status = true
  }
    return status;
}

function checkUserWorldSeriesStatus (teamname) {
  var status = false;
  
  if (teamname == cubs) {
    status = true;
  } else if (teamname == indians ) {
    status = false;
  }
  return status;
}

function setUserWorldSeriesWinner(teamname){
    var myteam = "OOPS";
  
  if (teamname == cubs) {
    myteam = teamname;
  } else if (teamname == indians ) {
    myteam = teamname;
  }
  return myteam;
}
  



function displayUserResults (status01,team01, status02, year01){

  setScreen("scr10_userTrivaResults_scrId");
  textLabel("results01","");
  textLabel("results02","");
  if (status01 === true && status02 === true) {

 
    setText ("results01","winner");
    setText ("results02","winner");
  } else if (status01 === true && status02 === false) {
        setText ("results01","winner");
        setText ("results02","loser");
 
  }
 else if (status01 === false && status02 === false) {
        setText ("results01","loser");
        setText ("results02","loser");

  } 
}

/*
var userWSWinnerSelection= prompt ("Who won the world series ?");


console.log ("The User selected " + userWSWinnerSelection + " as the winner of World Series"); // ask the user who won
userWSWinnerSelection = setUserWorldSeriesWinner(userWSWinnerSelection);  // set the user WS selection 
userWSWinnerStatus    = displayUserWorldSeriesStatus (userWSWinnerSelection); // set the  user correct based on his WS Selection 

userLastWonYear       = prompt ("When did the " + userWSWinnerSelection + "last win the world series?");
userLastWonYearStatus = checkWorldSeriesYearLastWon (userWSWinnerSelection, userLastWonYear);

console.log ("The User selected the year " + userLastWonYear + " when the " + userWSWinnerSelection + " last won the world series");

displayUserResults (userWSWinnerStatus, userWSWinnerSelection, userLastWonYearStatus,userLastWonYear );

//userIsAWinner02 = checkWinner (userLastWonYearStatus);

*/

/**

console.log ("The World Series Winner for 2016: " + getWorldSeriesWinner());
console.log ("The World Series Loser  for 2016: " + getWorldSeriesLoser());
console.log ("The last year the " + getWorldSeriesWinner() + " won the world series: " + getWorldSeriesYearLastWon(getWorldSeriesWinner()));
console.log ("The last year the " + getWorldSeriesLoser() + " won the world series: " + getWorldSeriesYearLastWon(getWorldSeriesLoser()));
*/


onEvent("scr10_userHappyFace_imgId", "click", function(event) {
  console.log("scr10_userHappyFace_imgId clicked!");
  setScreen("scr06_trophy_scrId");
  
});
onEvent("scr10_userFrownFace_imgId", "click", function(event) {
  console.log("scr10_userFrownFace_imgId clicked!");
  setScreen("scr05_disappointed_scrId");
});

onEvent("scr05_Playagain_btnId", "click", function(event) {
  console.log("scr05_Playagain_btnId clicked!");
  startOver();
});

onEvent("scr06_Playagain_btnid", "click", function(event) {
  console.log("scr06_Playagain_btnid clicked!");
  startOver();
});
