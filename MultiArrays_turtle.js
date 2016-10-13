

  
var simpleStarScale = 2;
var simpleStarColor = "green";
var simpleStar = [     
                ['penColor','green',-1],
                [ 'moveTo', 60, 240],  
                ['moveForward', 60/simpleStarScale, -1],  
                ['turnRight', 30, -1],    
                ['moveForward', 60/simpleStarScale, -1],  
                ['turnRight',150,-1],
                ['moveForward', 60/simpleStarScale, -1],  
                ['turnRight',30,-1],
                ['moveForward', 60/simpleStarScale, -1],  
         ];
var simpleSquareScale = 1;
var simpleSquareLength = 120;
var simpleSquare = [     
                ['penColor','red',-1],
                [ 'moveTo', 120, 240],  
                ['moveForward', simpleSquareLength/simpleSquareScale, -1],  
                ['turnRight', 90, -1],    
                ['moveForward', simpleSquareLength/simpleSquareScale, -1],  
                ['turnRight',90,-1],
                ['moveForward', simpleSquareLength/simpleSquareScale, -1],  
                ['turnRight',90,-1],
                ['moveForward', simpleSquareLength/simpleSquareScale, -1],  
         ];         

         
function drawMe (ar)
{
// outer loop applies to outer array 
for (var i=0, len=ar.length; i<len; i++) 
{     // inner loop applies to sub-arrays    
for (var j=0, len2=ar[i].length; j<len2; j++) 
{         // accesses each element of each sub-array in turn   
console.log( ar[i][j] );  


if (ar[i][j] === 'move') {
  var operation = 'move';
  console.log( ar[i][j+1]);
  var x = ar[i][j+1];
  var y = ar[i][j+2];
  console.log (operation+'('+x+')');
  move (x,y);
} else if (ar[i][j] === 'turnRight'){
  var operation = 'turnRight';
  var x = ar[i][j+1];
  var y = ar[i][j+2];
  turnRight (x);
} else if (ar[i][j] === 'moveForward'){
  var operation = 'moveForward';
  var x = ar[i][j+1];
  var y = ar[i][j+2];
  moveForward (x);
} else if (ar[i][j] === 'moveTo'){
  var operation = 'moveTo';
  var x = ar[i][j+1];
  var y = ar[i][j+2];
  penUp();
  moveTo (x,y);
  penDown();
} else if (ar[i][j] === 'penColor'){
  var operation = 'penColor';
  var x = ar[i][j+1];
  var y = ar[i][j+2];
  penColor (x);
}
}
}
}

for (var count = 0; count < 12; count++) {
drawMe(simpleStar);
}

drawMe(simpleSquare);
