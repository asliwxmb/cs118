# Stage 14 - 
## Puzzle 4 of 25
<https://studio.code.org/s/cspunit3/stage/14/puzzle/4>

###  Debugging Variables



One of the most common errors that can happen when you try to run a program is Unknown identifer. 
This is just the computer trying to tell you that it doesn't recognize something you wrote. 
Usually it's the name of a variable or function that you're trying to write and there is a small misspelling.

The computer doesn't hate you :) It just needs everything to be exact so it can understand what you're trying to get it to do.

App Lab alerts you to potential errors in two ways:

Hover your mouse over the yellow triangles or red squares next to line numbers in the code to see what they say.
As usual, the Debug Console will also tell you about any errors while your program is running.
Do This:

We've given you some code with some errors in it. Look at the error messages and try to figure out the problem.

Run the program.
Locate and fix the error.
When you get it right the output to the console should look like this:

``` javascript

var apples = 7;
console.log(apples);
var oranges = 13;
console.log(oranges);

```

7

13

---
## Puzzle 5 of 25 Debugging Variables
<https://studio.code.org/s/cspunit3/stage/14/puzzle/5>

There is a simple command called write in the UI Controls toolbox 
that is a fast and easy way to display text in the app itself. The way you use it is very similar to console.log. Let's debug another problem only using write instead of console.log.

You may have already run into this problem! But it's worth mentioning again. 
To display the value of a variable you should not use quotes. 
Notice the difference between these two statements - the comments next to each line explains the differences:

 write("score");  // will display the literal characters s-c-o-r-e
 write(score);    // will retrieve the value of score and display it
Do This:

To solve these problems you should only add or remove quotation marks.

Run the starter code
Locate and fix the problems
GOAL: 
Make the app display what's shown at right by only adding or removing quotation marks from the code given.

``` javascript
var score = 7;
write("The value of score is:");
write(score);
var lives = 20;
write("The value of lives is");
write(lives);
```

