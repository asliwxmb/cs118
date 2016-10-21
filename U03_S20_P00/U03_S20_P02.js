/**
 * OR Operator You will now see the JavaScript boolean operators AND (&&) and OR (||) in code toolbox. You can drag them out or simply type them.
Let's try OR right now. As a reminder: the OR operator will evaluate to true if either or both statements are true. If both are false, the OR operator will evaluate to false.


Do This:

We've provided you with starting code that prompts the user to enter a day of the week and stores it in a variable.

Add an if statement that uses an OR (||)

The program should write "It's the weekend!" if the day entered by the user is a weekend day.
Otherwise it should write "Can't wait for the weekend to get here."
*/


var day = prompt("Enter a day of the week.");
write("Day is: "+day);
//write your code here

if ((day == "Sat") || (day == "Sun"))	{
  write("It's the weekend!");
} else {
  write ("Can't wait for the weekend to get here");
}
