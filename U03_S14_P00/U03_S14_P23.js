/**
 * @Description Puzzle 23 of 25 Moving Memory - Challenge 5
 * @Name U03_S14_P23.js
 * @Link https://studio.code.org/s/cspunit3/stage/14/puzzle/23
 */
 
var x = 5;
var y = 11;
var z = 4;
// your code here
x = y - (x+z);
y = z + x;
z = x + y;

console.log("The value of x is: " + x + " (x should be 2)");
console.log("The value of y is: " + y + " (y should be 6)");
console.log("The value of z is: " + z + " (z should be 8)");

/**
 
The value of x is: 2 (x should be 2)
The value of y is: 6 (y should be 6)
The value of z is: 8 (z should be 8)

*/
