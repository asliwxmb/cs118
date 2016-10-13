/** @FileOverview
 * Introduction to Variables - Part 2
 * Puzzle 15 of 25
 * Variable Reassignment - Part 1
 * So far we have only set a variable's value once. 
 * But it's called a variable for a reason - its value can change (or vary) throughout a program. 
 * This is useful and necessary for keeping track of things like a score in a game.
 * To re-assign a value to a variable all you have to do is maintain the mental model of what's happening:
 * Variables are containers for information.
 * The = sign is an instruction to set the value.
 * A series of assignment statements (see example to right) is a list of instructions to execute one at a time 
 * it's not a series of equations that define the state of the world.
 * 
 * Do This:
 * Make a prediction.
 * The code on the following screen looks like what is shown at right. 
 * Study it and make a prediction about what will happen when you run the code. 
 * What will the values of a and b be at the end of the program?
 * Add console.log statements.
 * Prove it to yourself by adding console.log statements at the end of the program to find out what the value of a and b are.
 * NOTICE: in the code above, after the variable a has been created using var, 
 * to change a variable's value, you only need to refer to the variable by its name. 
 * The word var only needs to be used once - when the variable is created for the first time.
 * 
 * It's a common mistake to use var everytime you want to use a variable but just remember var means CREATE a new variable. 
 * When you create a new variable it will lose its old value. We'll look at errors related to this later.

*/

var a = 3;
var b = 7;
a = b;
b = a;
//add console.log statments below
console.log ("a="+a);
console.log ("b="+b);
