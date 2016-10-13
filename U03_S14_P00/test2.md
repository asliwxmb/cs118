# Variables - The Mental Model

![](https://images.code.org/af52f10dffc8980e9b291b42057d9f8c-image-1445006639426.png) A piece of code like the one to the left can cause confusion to early programmers (but not you!). Below we show you a technique you can use to trace out what's happening in memory as you mentally go through the code line by line.  Even pros do this to verify for themselves that the code is doing what they think it will.  This is also a form of **making a prediction** which really helps you see and learn what's happening faster.

Here's what you do.  You know that the code involves two variables (or two chunks of memory) so on a piece of paper make two boxes to represent the containers for values, then fill in the containers with values as you trace out each line of code.

Code / Instruction                                                                                                                                           | State of Memory (write on paper)                                                                                                                                                                                                                                                                                                                                                                                         
------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
_Before code is executed_                                                                                                                                    | ![](https://images.code.org/bad35e967dcf51a1d9ce46cffaaedfc5-image-1445958547212.png)                                                                                                                                                                                                                                                                                                                                    
![](https://images.code.org/ea0eb0595929c5fb8bcfc199b254840e-image-1445007367058.png) 

_Create a variable called **a** that gets a value of **3**._   | ![](https://images.code.org/efa65abe4c939781c125740f0a0ffe37-image-1445958568049.png)

_Label one of the containers **a** and write **3** in the box._                                                                                                                                                                                                                                                             
![](https://images.code.org/91447282489a0bcd7e7905394e608ada-image-1445007368831.png) 

_Create a variable called **b** and it gets a value of **7**._ | ![](https://images.code.org/1b710c02d5084d5b62e4e5befe8c81de-image-1445958590104.png)                                                                                                                                                                                                                                                                                                                                    
![](https://images.code.org/738fff341d21e2b4235271ea137a1016-image-1445007370615.png)

_Copy the current value of **b** into **a**._                   | ![](https://images.code.org/93595f90f756bf2cd701aa99ae31f4da-image-1445958640960.png)

_Scratch out the old value in **a** - its value is being changed -- write in the new value._                                                                                                                                                                                                                              
![](https://images.code.org/4b0faa246754583696c4c0132277bda8-image-1445007372291.png)

_Copy the current value of **a** (which is now 7) into **b**._  | ![](https://images.code.org/6d1b2018cf280c0d4a000cf397f7815a-image-1445958664958.png)

    NOTE: the value of **a** changed on the last line! So you must use the value that's currently in **a** for this line.  Also note that even though it's the same value (7) you're still instructing the computer to put a value into memory, and the computer will just follow whatever instructions you give.


You'll get a chance to practice this technique in the next few challenges.
Variable Reassignment - Part 1

So far we have only set a variable's value once. But it's called a variable for a reason - its value can change (or vary) throughout a program. This is useful and necessary for keeping track of things like a score in a game.

To re-assign a value to a variable all you have to do is maintain the mental model of what's happening:

Variables are containers for information.
The = sign is an instruction to set the value.
A series of assignment statements (see example to right) is a list of instructions to execute one at a time - it's not a series of equations that define the state of the world.
Do This:



Make a prediction.

The code on the following screen looks like what is shown at right. Study it and make a prediction about what will happen when you run the code. What will the values of a and b be at the end of the program?

Add console.log statements.

Prove it to yourself by adding console.log statements at the end of the program to find out what the value of a and b are.

NOTICE: in the code above, after the variable a has been created using var, to change a variable's value, you only need to refer to the variable by its name. The word var only needs to be used once - when the variable is created for the first time.

It's a common mistake to use var everytime you want to use a variable but just remember var means CREATE a new variable. When you create a new variable it will lose its old value. We'll look at errors related to this later.
