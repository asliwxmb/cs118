<div class="modal-body dash_modal_body"><div id="x-close" class="x-close" data-dismiss="modal"></div><iframe class="markdown-instructions-container" src="////code.org/applab/docs/console.log?embedded" style="width: 100%; overflow-y: auto; max-height: 1013px; height: 1013px;"></iframe></div>

console.log(message)

Category: Variables

Displays a string and/or variable values in the debug console in App Lab.

console.log() is used as a debugging tool to help you understand what your code is doing. By displaying a message containing either descriptive text that tells you what is happening or the value of particular variables, you can follow along as your code executes. The user of your app will not see the console.log() messages.

Examples


1
// Let's you know your code is running.
2
console.log("It's Alive!");
Example: Random Thought I'm thinking of a number between 1 and 10.


1
// I'm thinking of a number between 1 and 10.
2
var myRandomNumber = randomNumber(1,10);
3
console.log("My random number is: " + myRandomNumber);

console.log(message)

Category: Variables

Displays a string and/or variable values in the debug console in App Lab.

console.log() is used as a debugging tool to help you understand what your code is doing. By displaying a message containing either descriptive text that tells you what is happening or the value of particular variables, you can follow along as your code executes. The user of your app will not see the console.log() messages.

Examples


1
// Let's you know your code is running.
2
console.log("It's Alive!");
Example: Random Thought I'm thinking of a number between 1 and 10.


1
// I'm thinking of a number between 1 and 10.
2
var myRandomNumber = randomNumber(1,10);
3
console.log("My random number is: " + myRandomNumber);
Example: Checkbox Value Display the true/false state of a checkbox.


1
// Display the true/false state of a checkbox.
2
checkbox("myCheckbox", false);
3
textLabel("myLabel", "Click on or off", "myCheckbox");
4
onEvent("myCheckbox", "click", function(event) {
5
  console.log("Checkbox is: " + getChecked("myCheckbox"));
6
});
Syntax


1
console.log(message)
Parameters

Name	Type	Required?	Description
message	string	Yes	The message string and/or variable values to display in the console.
Returns

No return value. Outputs to the console only.

Tips

You can use the string concatentation operator + to make long strings containing both words (enclosed in " "), variables (the current value will be displayed), and function return values.
Remember that the + operator works differently for numbers than strings. For instance console.log(5 + 3) will display "8" because the integers 5 and 3 will be added together then automatically converted to a string, but console.log("5" + "3") will simply concatenate the two strings to display "53".
Code that has a lot of console.log() messages is considered "chatty" because it talks to you a lot. Chatty code is good when you first write a new block of code because it helps you know what is happening, so don't hesitate to use console.log() a lot. But chatty code can be irritating after a while, so once your code is working the way you want, it is a good idea to go back through and clean up by removing console.log() messages that are no longer helpful.
Found a bug in the documentation? Let us know at documentation@code.org
