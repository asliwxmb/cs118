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
