/**
 * https://studio.code.org/s/cspunit3/stage/14/puzzle/22
 * U03_S14_P22.js
 * HINT:(click to expand)
 * Since this one requires you to change the value of two variables you need
 * to be careful about which one you change first, since its new value will affect the next lines of code.
 * You can also take advantage of the fact that since z is not used as a display value,
 * you can use it as a temporary holding ground for one value while you change another.
 */
 

var x = 2;
var y = 3;
var z = 0;
// your code here
z = x;
x = y;
y = z;

console.log("The value of x is: " + x + " (x should be 3)");
console.log("The value of y is: " + y + " (y should be 2)");

/** RESULT
The value of x is: 3 (x should be 3)
The value of y is: 2 (y should be 2)
*/
