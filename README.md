# cs118
## Updated with cspunit3 stage 2 puzzle 1-7
http://speakingjs.com/es5/ch29.html 

# Helpers
https://code.org/curriculum/course2/12/Teacher

## Logo and Fractals
- <http://dobbse.net/thinair/2008/12/logo-fractals-recursion.html>

- <https://github.com/dobbs/turtle>

The section numbers are per the Berkeley Logo Reference Manual in Brian Harvey's Computer Science Logo Style volume 2: Advanced Techniques for ease of comparison.

Data Types
Data Structure Primitives
Communication
Arithmetic
Logical Operations
Graphics
Workspace Management
Control Structures
Types
"word
Text string (terminated by whitespace)
:variable
Input definition/variable reference
[ item ... ]
List
( expression )
Parenthesis can be used to group expressions
procedure input ...
Call procedure with default number of inputs
( procedure input ... )
Call procedure with an arbitrary number of inputs
2. Data Structure Primitives
2.1 Constructors

word expr expr
(word expr ...)
Concatenate two (or more) words into one word, separated with spaces
list thing1 thing2
(list thing1 thing2 ...)
Create a new list from the inputs
sentence thing1 thing2
(sentence thing1 thing2 ...)
se thing1 thing2
(se thing1 thing2 ...)
Create a new list from the inputs (if non-lists) or members of the inputs (if lists)
fput thing list
lput thing list
Outputs list, but with thing added as a new first/last item
combine thing1 thing2
If thing2 is a word, like word; otherwise, like fput
reverse list
Outputs a list with the items in reverse order
gensym
Outputs a unique string, e.g. G1, G2, etc.
2.2 Data Selectors

first list
last list
Outputs the first or last item from the list, respectively
butfirst list
bf list
butlast list
bl list
Outputs the list, except for the first/last item
firsts listoflists
Outputs a list of the first item of each sublist
butfirsts listoflists
bfs listoflists
Outputs a list of sublists without the first item
pick list
Outputs one item from a list, at random
item index list
Outputs the indexth item of the list
remove thing list
Outputs the list with any occurences of thing removed
remdup list
Outputs the list with duplicates removed
2.3 Data Mutators

push stackname thing
pop stackname
Push to/pop from a stack i.e. list variable, e.g. make "s [] then push "s 1. Stacks grow from the front.
queue stackname thing
dequeue stackname
Add/remove from a queue i.e. list variable, e.g. make "q [] then queue "q 1. Queues grow from the end
2.4 Predicates

Predicates return 1 (true) or 0 (false)

wordp thing
word? thing
listp thing
list? thing
numberp thing
number? thing
Test if thing is a word, list, or number respectively.
equalp expr expr
equal? expr expr
expr = expr
notequalp expr expr
notequal? expr expr
expr <> expr
Equality/inequality tests. Compares strings, numbers, or lists (equal if length and all members are equal).
emptyp expr
empty? expr
Test if thing is an empty list or empty string.
beforep thing1 thing2
before? thing1 thing2
Test string collation order.
memberp thing list
member? thing list
Test if thing is equal to any member of list.
substringp thing1 thing2
substring? thing1 thing2
Test if thing1 is a substring of thing2.
2.5 Queries

count thing
Outputs length of a list or number of characters in a string
ascii expr
Outputs ASCII (actually, Unicode) code point for first character of string
char expr
Outputs Unicode character at specified code point
uppercase expr
lowercase expr
Outputs string converted to upper/lowercase
3. Communication
3.1 Transmitters

print thing
pr thing
(print thing1 thing2 ...)
(pr thing1 thing2 ...)
Print inputs to the text screen, separated by spaces, and followed by a newline. Square brackets are only put around sublists.
type thing
(type thing1 thing2 ...)
Like print but with no trailing newline.
show thing
(show thing1 thing2 ...)
Like print but with square brackets around list inputs.
3.2 Receivers

readword
(readword promptstr)
Prompt the user for a line of input. The result (including spaces) is the single word output.
3.4 Terminal Access

cleartext
ct
Clear the text screen.
4. Arithmetic
4.1 Numeric Operations

Inputs are numbers or numeric expressions, output is a number.

sum expr expr
(sum expr ...)
expr + expr
difference expr expr
expr - expr
product expr expr
(product expr ...)
expr * expr
quotient expr expr
(quotient expr)
expr / expr
power expr expr
expr ^ expr
Add, subtract, multiply, divide, and raise-to-the-power-of respectively. A single input to quotient returns the reciprocal.
remainder expr expr
expr % expr
modulo expr expr
Outputs the remainder (modulus). For remainder and % the result has the same sign as the first input; for modulo the result has the same sign as a the second input.
minus expr
- expr
Unary minus sign must begin a top-level expression, follow an infix operator, or have a leading space and no trailing space.
abs num
Absolute value
int num
round num
Truncate or round a number, respectively.
sqrt expr
exp expr
log10 expr
ln expr
Square root, e to the power of, common logarithm, and natural logarithm, respectively.
arctan expr
(arctan x y)
sin expr
cos expr
tan expr
The usual trig functions. Angles are in degrees.
radarctan expr
(radarctan x y)
radsin expr
radcos expr
radtan expr
The usual trig functions. Angles are in radians.
iseq first last
Outputs a list with integers from first to last, inclusive
rseq first last count
Outputs a list of count numbers from first to last, inclusive
4.2 Numeric Predicates

greaterp expr expr
greater? expr expr
expr > expr
greaterequalp expr expr
greaterequal? expr expr
expr >= expr
lessp expr expr
less? expr expr
expr <= expr
lessequalp expr expr
lessequal? expr expr
expr <= expr
Greater than, greater than or equal to, less than, less than or equal to, respectively. Inputs are numbers or numeric expressions, output is 1 (true) or 0 (false).
4.3 Random Numbers

random expr
Outputs a random number from 0 through one less than expr
4.5 Bitwise Operations

bitand expr expr
(bitand expr ...)
bitor expr expr
(bitor expr ...)
bitxor expr expr
(bitxor expr ...)
bitnot expr
Bitwise and, or, exclusive-or, and not, respectively.
ashift expr bitcount
Arithmetic bit shift. If bitcount is negative, shifts to the right, preserving sign.
lshift expr bitcount
Logical bit shift. If bitcount is negative, shifts to the right, zero-filling.
5. Logical Operations
true
Outputs 1
false
Outputs 0
and expr expr
(and expr ...)
or expr expr
(or expr ...)
xor expr expr
(xor expr ...)
not expr
Logical "and", "or", "exclusive-or", and "not", respectively. Inputs are numbers or numeric expressions, output is 1 (true) or 0 (false).
6. Graphics
An introduction to Turtle Geometry.

6.1 Turtle Motion

forward expr
fd expr
Move turtle forward expr pixels
back expr
bk expr
Move turtle backward expr pixels
left expr
lt expr
Rotate expr degrees counterclockwise
right expr
rt expr
Rotate expr degrees clockwise
setpos [ expr expr ]
setxy expr expr
setx expr
sety expr
Move turtle to the specified location without drawing
setheading expr
seth expr
Rotate the turtle to the specified heading
home
Moves the turtle to center, pointing upwards
6.2 Turtle Motion Queries

pos
xcor
ycor
Outputs the current turtle position as [ x y ], x or y respectively
heading
Outputs the current turtle heading
towards [ expr expr ]
Outputs the heading towards the specified [ x y ] coordinates
6.3 Turtle and Window Control

showturtle
st
Show the turtle
hideturtle
ht
Hide the turtle
clean
Clear the drawing area
clearscreen
cs
Same as clean and home together
wrap
If the turtle moves off the edge of the screen it will continue on the other side. (default)
window
The turtle can move past the edges of the screen, unbounded.
fence
The turtle attempts to move past the edge of the screen it will stop.
fill
Does a paint bucket flood fill at the turtle's position.
filled fillcolor [ statements ... ]
Execute statements without drawing but keeping track of turtle movements. When complete, fill the region traced by the turtle with fillcolor and outline the region with the current pen style.
label expr
Draw a word (same logic as print) on the graphics display at the turtle location
setlabelheight expr
Set the height for text drawn by label, in pixels
6.4 Turtle and Window Queries

shownp
shown?
Outputs 1 if the turtle is shown, 0 if the turtle is hidden
turtlemode
Outputs WRAP, WINDOW or FENCE
labelsize
Outputs the height of text drawn by label, in pixels
6.5 Pen and Background Control

pendown
pd
Turtle resumes leaving a trail
penup
pu
Turtle stops leaving a trail
penpaint
penerase
penreverse
Change the turtle drawing mode - paint (the default) leaves a colored trail, erase restores the background, reverse inverts the background.
setpencolor logocolor
setpencolor csscolor
(setpencolor expr expr expr)
Set pen/text color. Color can be a standard Logo color number (0-15), CSS color string (CSS color names or #rrggbb), or in the 3-input version, r/g/b values in 0...99.

The standard Logo colors are:

0: black	1: blue	2: green	3: cyan
4: red	5: magenta	6: yellow	7: white
8: brown	9: tan	10: green	11: aqua
12: salmon	13: purple	14: orange	15: gray
setpensize expr
Set pen width in pixels. If expr is a list, the first member is used.
6.6 Pen Queries

pendownp
pendown?
Outputs 1 if the pen is down, 0 otherwise
penmode
Outputs PAINT, ERASE or REVERSE
pencolor
Outputs the current pen color. This will be a CSS color string, not necessarily the value passed in.
pensize
Outputs a two element list with the pen width and height (usually the same).
7. Workspace Management
7.1 Procedure Definition

to procname inputs ... statements ... end
Define a new named procedure with optional inputs
def procname
Outputs the definition of a named procedure as a string
7.2 Variable Definition

make varname expr
Update a variable or define a new global variable. The variable name must be quoted, e.g. make "foo 5
name expr varname
Like make but with the inputs reversed
local varname
(local varname ...)
A subsequent make will create the variable(s) in the local scope instead of the global scope
localmake varname expr
Define a variable in the local scope (shortcut for local then make
thing varname
Outputs the value of variable. :foo is a shortcut for thing "foo
global varname
Reserve the variable at the global scope. This doesn't do anything useful.
7.4 Workspace Predicates

Predicates return 1 (true) or 0 (false)

procedurep name
procedure? name
Test if there is a procedure with the given name.
primitivep name
primitive? name
Test if there is a built-in procedure with the given name.
definedp name
defined? name
Test if there is a user-defined procedure with the given name.
namep name
name? name
Test if there is a variable with the given name.
7.5 Workspace Queries

contents
Outputs a list with two members. The first is a list of user-defined procedure names. The second is a list of defined variables.
procedures
Outputs a list of user-defined procedure names.
primitives
Outputs a list of primitive procedure names.
globals
Outputs a list of defined global variables.
names
Outputs a list with two members. The first is an empty list. The second is a list of defined variables.
7.7 Workspace Control

erase contentslist
Takes a two member list, where the first is a list of user-defined procedure names to erase, and the second is a list of defined variables to erase.
erall
Erase all user-defined procedures and variables.
8. Control Structures
8.1 Control

run [ statements ... ]
Run the specified statements once
runresult [ statements ... ]
Run the specified statements once. If the statements return a value, the result is a list with the value as a single member. Otherwise, the result is an empty list.
repeat expr [ statements ... ]
Repeat statements expr times
forever [ statements ... ]
Repeat statements forever. Used inside a user-defined procedure that terminates with output or stop
repcount
Outputs the current iteration number of the current repeat or forever
if expr [ statements ... ]
Execute statements if the expression is non-zero
ifelse expr [ statements ... ] [ statements ... ]
Execute first set of statements if the expression is non-zero, otherwise execute the second set
test expr
Test the specified expression, save the result in the local scope for subsequent use by iftrue or iffalse
iftrue [ statements ...]
ift [ statements ...]
iffalse [ statements ...]
iff [ statements ...]
Run the statements if the result of the last local test was non-zero (true) or zero (false) respectively.
stop
End the running procedure with no output value
output expr
op expr
End the running procedure and output the specified value
bye
Terminate the program
.maybeoutput expr
Like output if expr returns a value, like stop otherwise
ignore expr
Evaluate and ignore results of the expression
for controllist [ statements ...]
Typical for loop. The controllist specifies three or four members: the local varname, start value, limit value, and optional step size.
do.while [ statements ...] expr
Runs the specified statements at least once, and repeats while the expression is non-zero (true).
while expr [ statements ...]
Runs the specified statements only while the expression remains non-zero (true).
do.until[ statements ...] expr
Runs the specified statements at least once, and repeats while the expression is zero (false).
until expr [ statements ...]
Runs the specified statements only while the expression remains zero (false).
8.2 Template-based Iteration

These higher-level procedures support only the "named procedure" form of template. The first input is the name of a procedure to call.

apply procname list
Call procname with the members of list as inputs
invoke procname input1
(invoke procname input1 ...)
Call procname with the specified inputs as inputs
foreach procname list
call procname for each item in the list
map procname list
Outputs a list composed of the results of calling procname for each item in the list
filter procname list
Outputs a list composed of the input list where procname called on the item returns non-zero (true)
find procname list
Outputs the first item in list for which calling procname on it returns non-zero (true). If not found, the empty list is returned.
reduce procname list
(reduce procname list initial)
Call procname repeatedly with two inputs - the current value and the next list item. If initial is not specified, the first list element is used instead.


Chapter 29. JSDoc: Generating API Documentation
It is a common development problem: you have written JavaScript code that is to be used by others and need a nice-looking HTML documentation of its API. The de facto standard tool in the JavaScript world for generating API documentation is JSDoc.[23] It is modeled after its Java analog, JavaDoc.
JSDoc takes JavaScript code with /** */ comments (normal block comments that start with an asterisk) and produces HTML documentation for it. For example, given the following code:

## TOC
stage 'The Need For Programming Languages'
level 'U3L01 Student Lesson Introduction'
assessment 'U3L01 Assessment1'
assessment 'U3L01 Assessment3'

stage 'Using Simple Commands'
level 'U3L02 Student Lesson Introduction'
level 'U3L2 Using Simple Commands'
level 'U3L2_TurtleSquare_right'
level 'U3L2_Turtle3by3Grid'
assessment 'U3L02 Assessment'
assessment 'U3L02 Free Response Getting Started'
assessment 'U3L02 Free Response Wrap Up'

stage 'Creating Functions'
level 'U3L03 Student Lesson Introduction'
level 'U3L03 Define and use turnAround'
level 'U3L03 Draw a T using turnAround'
level 'U3L03 define turnRight and draw a rectangle'
level 'U3L03 - draw rect function'
level 'U3L03 - draw step'
level 'U3L03 Three Steps'
level 'U3L03 draw diamond'
assessment 'U3L03 - multiselect - properties of functions'
assessment 'U3L03 Assessment'
assessment 'U3L03 Free Response Wrap Up'

stage 'Functions and Top-Down Design'
level 'u3L04 Student Lesson Introduction'
level 'U3L04 - snowflake'
level 'U3L04 - 3 by 3 with functions'
assessment 'U3L04 Assessment1'
assessment 'U3L04 Assessment2'
assessment 'U3L04 Free Response Wrap Up'

stage 'APIs and Function Parameters'
level 'U3L06 Student Lesson Introduction'
level 'U3L06 - moveForwardwithParams'
level 'U3L06 Challenge 1 triangle'
level 'U3L06 Challenge 2 purple square'
level 'U3L06 Challenge 3 fill pink'
level 'U3L06 Challenge 4 bullseye'
level 'U3L06 Challenge 6 squiggles'
level 'U3L06 Challenge 5 overlapping circles'
level 'U3L06 Challenge 7 smiley face'
level 'U3L06 Challenge 8 make your own'
assessment 'U3L06 Assessment2'
assessment 'U3L06-API-multichoice'
assessment 'U3L06 Assessment'

stage 'Creating functions with Parameters'
level 'U3L08 Student Lesson Introduction'
level 'U3L08 - drawSquareWithParam'
level 'U3L07 - createTriangleParam'
level 'U3L08 - squareTwoParams'
level 'U3L08 - createTwoParamTriangle'
level 'U3L08 - introUnderTheSea'
level 'U3L08 - paramsToStarfish'
level 'U3L08 - seaGrass'
level 'U3L08 - fish'
level 'U3L08 - multiParamFish'
level 'U3L08 - randomInput'
level 'U3L08 - freePlay'
assessment 'U3L08 Assessment1'
assessment 'U3L08 Assessment2'

stage 'Looping and Random Numbers'
level 'U3L07 Student Lesson Introduction'
level 'U3L07 - introSquare'
level 'U3L07 - randomSquare'
level 'U3L07 - randomDots1'
level 'U3L07 - loopsWithRandom'
level 'U3L07 - topDownDesign'
level 'U3L07 - bubbles'
level 'U3L07 - fish'
level 'U3L07 - seaStar'
level 'U3L07 - seaGrass'
level 'U3L07 - allSeaGrass'
level 'U3L07 - sunBeams'
level 'U3L07 - Free Play Loops and Random'
assessment 'U3L07 - MC remove line of code loops'
assessment 'U3L07 Free Response Reflection'

stage 'Practice PT - Design a Digital Scene'
level 'U3L09 Student Lesson Introduction'
level 'U3L08 - individualCode'
level 'U3L08 - digitalScene'

stage 'Events Unplugged’
level 'U3L12 - Student Introduction 1'

stage 'Event-Driven Programming and Debugging'
level 'U3L13 Student Lesson Introduction'
level 'U3L13 - Turtle move with button'
level 'U313 drag Two Buttons'
level 'U3L13 eventsDetails'
level 'U313 Two Buttons with Ids'
level 'U3L13 - Debug Id Problem'
level 'U3L13 - Debugging 1'
level 'U3L13 - Debugging 2'
level 'U3L13 - Debugging 3'
level 'U3L13 - Turtle Driver Project'
assessment 'U3L13 debugging Multi'
assessment 'U3L13 Free Response Reflection'
assessment 'U3L14 - MC order of button and onEvent'
assessment 'U3L14 - MC Duplicate Ids'

stage 'Beyond Buttons Toward Apps'
level 'U3L16 Student Lesson Introduction'
level 'U3L16 - singleSetPosition'
level 'U3L16 - introSetPosition'
level 'U3L16 - setPosition to move button'
level 'U3L16 - newEventTypes'
assessment 'U3L14 - Matching Events to Description'
level 'U3L16 - text labels'
level 'U3L16 - use images'
level 'U3L16 - chooseImages'
level 'U3L16 - chaserApp'

stage 'Introducing Design Mode'
level 'U3- L12 -Design Mode SFLP'
level 'U3 - Design Mode 1'
level 'U3-Design Mode-ID and Event Handler'
level 'U3 - Design Mode - WTF Console Log'
level 'U3 - Design Mode - Console Log'
level 'U3 - Design Mode - Layers and Delete'
level 'U3 - Design Mode - Multi Screens'
level 'U3 - Design Mode - Multi Screens 2'
level 'U3-Design Mode-Image'
level 'U3 - Design Mode -Recreate Beyond Buttons'

stage 'Multi-screen Apps'
level 'U3L13 Student Facing Lesson Plan'
level 'U3L13 - Project'

stage 'Controlling Memory with Variables'
level 'U3L19 Student Lesson Intro'
level 'U3L14 - Message - basic mechanics of variables'
level 'U3L19 - three basic ops of variables’
level 'U3L19 - fix the var name syntax error v2’
level 'U3L19 - write var and string with same name v2’
level 'U3- Variables - Create And Assign'
level 'U3- Variables - Text Mode'
level 'U3L14 - Message - Other ways to assign values'
level 'U3 - Variables - Set to Expression' 
level 'U3L14 - concatenate simple'
level 'U3 - Variables - Set to Expression with Other Variables'
level 'U3L14 - Assigning Random Value'
level 'U3L14 - Mini Calculator embed'
level 'U3L14 - User Input Division calculator'
level 'U3L19 - test reassignment of two vars'
level 'U3-Variables-Memory Breakdown'
level 'U3L14 - Variable ReAssignment pt2'
level 'U3L14 - moving memory challenge1'
level 'U3L14 - moving memory challenge2'
level 'U3L14 - moving memory challenge3'
level 'U3L14 - moving memory challenge4'
level 'U3L14 - moving memory challenge5'
level 'U3L14 - moving memory challenge6'
level 'U3L19 - variable reassignment challenge pt2'
assessment 'U3L14 - MC variable reassignment'

stage 'Using Variables in Apps'
level 'U3L15 Student Lesson Intro - new'
level 'U3 full clicker demo'
level 'U3L15 - practice with setText'
level 'U3L15 - DEMO up down count practice app'
level 'U3L15 - global var example count up'
level 'U3L15 - variable scoping problem debugging'
level 'U3L15 spot the difference variable debugging'
level 'U3L19 - variable scope explanation pt2'
level 'U3L15 - add code to make count down work'
level 'U3L15 - count upDown bug forget to set text'
level 'U3L15 - count upDown bug var not created globally'
level 'U3L15 - count upDown bug logic error wrong update'
level 'U3L15 - mini clicker update score'
level 'U3L15 click add lives'
level 'U3L15 - explanation of IF and =v=='
level 'U3L15 - Simple If-statements in UpDown App'
level 'U3L15 - Add reset button to UpDown app'
level 'U3L15 - Debugging Simple If-statements =v=='
level 'U3L15 - Debug forget to update var on reset in UpDown app'
level 'U3L15 - Debug if never triggers in UpDown app'
level 'U3L15 full clicker app'

stage 'User Input and Strings'
level 'U3L26 Student Lesson Introduction'
level 'U3L16 Mad Lib Demo'
level 'U3L16 - introStrings'
level 'U3L16 - doubleQuotes'
level 'U3L16 - textInput getText write'
level 'U3L16 - intro getText'
level 'U3 - User Input - Save getText To Variable'
level 'U3L16 - outputWithTextArea'
level 'U3L16 - toUpper'
level 'U3L16 Mad Lib Student Setup'
level 'U3L16 Mad Lib setText'
level 'U3L16 Mad Lib getText'
level 'U3L16 Mad Lib toUpper'
level 'U3L16 Mad Lib Clear Input'
assessment 'U3L25 Free Response 3'

stage 'Introduction to Digital Assistants'
level 'U3L23 Student Lesson Introduction'
assessment 'U3L23 Free Response Getting Started'
level 'U3 Digital Assistant Target'
level 'U3L16 - challenge say hi app'
level 'U3 Digital Assistant Design'
level 'U3 Digital Assistant Set Text'
assessment 'U3L23 Free Response Wrap Up'

stage 'Understanding Program Flow and Logic'
level 'U3L20 Student Lesson Introduction'
level 'U3 - Conditionals - Boolean Expressions and Operators'
level 'U3L18 comparison operators'
assessment 'U3L18 Matching'
level 'U3 - Conditionals - Translating Flowcharts - If Statement'
level 'U3 - High Low - If'
level 'U3 - High Low - Dropdown'
level 'U3 - Conditional Basics - 6'
level 'U3 - Conditionals - Introducing Else'
level 'U3 - High Low - Else'
level 'U3 - Conditionals - Translating Flowcharts - Chained'
level 'U3 - High Low - Else if'
level 'U3 - High Low - Debug'
level 'U3 - Dice - If'
level 'U3 - Dice - Dropdown and Score'
level 'U3 - Dice - Dropdown with Strings'
level 'U3 - Dice - Nested'

stage 'Introduction to Conditional Logic'
level 'U3L24 Student Lesson Introduction'
level 'U3L23 Chatbot Conditionals 1'
level 'U3 - Movie Bot - toLowerCase'
level 'U3L24 introIncludes'
level 'U3L24 Nested Conditionals 1'
level 'U3 - Movie Bot - Nested Motivation'
level 'U3L24 Nested Conditionals 2'

stage 'Compound Conditional Logic'
level 'U3L25 Student Lesson Introduction'
level 'U3 - Conditionals - Simple OR'
level 'U3 - Conditionals - Simple AND'
level 'U3L20 - combining And and Or explanation'
level 'U3 - Conditionals - Combine AND OR Simple'
level 'U3 - Conditionals - Combine AND OR and NOT'
level 'U3L26 OR operator'
level 'U3 - Movie Bot - Multiple If Sequences'
level 'U3L26 AND operator'
level 'U3 - Movie Bot - When Multiple If Statements'

stage 'Digital Assistant Project'
level 'U3L21 Student Lesson Introduction v2'
level 'U3L24 Chatbot Basic Conditionals'

stage 'While Loops'
level 'U3L28 Student Lesson Introduction'
level 'U3 - Loops - 1'
level 'U3 - Loops - 2'
level 'U3 - Loops - 3'
level 'U3 - Loops - Typing in Console'
level 'U3 - Loops - 4'
level 'U3 - Loops - 5'
level 'U3 - Loops - 8'
level 'U3 - Loops - 6'
level 'U3 - Loops - 7'
level 'U3 - Loops - 9'
level 'U3 - Loops -  Complex Condition'
level 'U3 - Loops - 10'
level 'U3 - Loops - 11'
level 'U3 - Loops - 12'
level 'U3 - Loops - Plus Plus'
level 'U3 - Loops - Minus Minus'
level 'U3 - Loops - plus and minus = operator'
level 'U3 - Loops - minus = operator'
level 'U3 - Loops - 14'
level 'U3 - Loops - 15'

stage 'Loops and Simulations'
level 'U3L29 Student Lesson Introduction'
level 'U3 - Simulation - Intro'
level 'U3 - Simulation - 1'
level 'U3 - Simulation - 2'
level 'U3 - Simulation - 2.1'
level 'U3 - Simulation - 2.5'
level 'U3 Simulation Updating Hypotheses'
level 'U3 - Simulation - 3'
level 'U3 - Simulation - 4'
level 'U3 - Simulation - 5'
level 'U3 Simulations Hypotheses Reflections'
level 'U3 - Simulation - 6'

stage 'Introduction to Arrays'
level 'U3L30 Student Lesson Introduction'
level 'U3 - Arrays - createFirstArray'
level 'U3 - Arrays - appendItem'
level 'U3 - Arrays - introIndex'
level 'U3 - Arrays - indexPractice'
level 'U3 - Arrays - assignment'
level 'U3 - Arrays - assignment2'
level 'U3 - Arrays - assignment3'
level 'U3 - Arrays - stringsInArrays'
level 'U3 - Arrays - insertingItems'
level 'U3 - Arrays - remove'
level 'U3 - Arrays - insertionErrors'
level 'U3 - Arrays - length'
level 'U3 - Arrays - lengthMinus1'
level 'U3 - Arrays - expressionsAsIndexes'
level 'U3 - Arrays - Demo App'
level 'U3 - Arrays - favThings giveIDs'
level 'U3 - Arrays - favThings createArray'
level 'U3 - Arrays - favThings firstOutput'
level 'U3 - Arrays - favThings Counting Variable'
level 'U3 - Arrays - favThings Next'
level 'U3 - Arrays - favThings Prev'
level 'U3 - Arrays - favThings addItem'
level 'U3 - Arrays - favThings bounds'
level 'U3 - Arrays - favThings keepPlaying'
assessment 'U3 - Arrays - Wrap Up 1'
assessment 'U3 - Arrays - Wrap Up 2'

stage 'Image Scroller with Key Events'
level 'U3L31 Student Lesson Introduction'
level 'U3 - Keys - Demo App'
level 'U3L25 - drag out key event'
level 'U3 - Keys - Key Up and Down'
level 'U3L25 - play sound when up key'
level 'U3 - Keys - Multiple Keys'
level 'U3 - Keys - Buttons and Keys'
level 'U3 - Keys - Functions'
level 'U3 - Keys - Add Image URLs'
level 'U3 - Keys - Final Image Scroller'
assessment 'U3- Keys - Code Refactoring Exit Ticket'

stage 'Processing Arrays'
level 'U3L32 Student Lesson Introduction'
level 'U3 - Loops And Arrays - Intro For Loop'
level 'U3 - Loops And Arrays - Print Array'
level 'U3 - Loops And Arrays - Add 5'
level 'U3 - Loops And Arrays - Divid by 2'
level 'U3 - Loops And Arrays - Loop Array If'
level 'U3 - Loops And Arrays - Linear Search'
level 'U3 - Loops And Arrays - Counting Times'
level 'U3 - Loops And Arrays - Printing Single True'
level 'U3 - Loops And Arrays - Search with Boolean Var'
level 'U3 - Loops And Arrays - Make it a Function'
level 'U3 - Loops And Arrays - Make it a Function - add list parameter'
level 'U3 - Loops And Arrays - General Search Param'
level 'U3 - Loops And Arrays - Find Min'

stage 'Functions with Return Values'
level 'U3L27 Student Lesson Introduction'
level 'U3 - Arrays and Loops - Explain Functions with Returns'
level 'U3 - Return Values - useMinVal'
level 'U3 - Return Values - writeMaxVal'
level 'U3 - Return Values - debuggingMaxVal'
level 'U3 - Return Values - debuggingConstrain'
level 'U3 - Return Values - constrainTurtle'
level 'U3 - Return Values - wrapTurtle'

stage 'Canvas and Arrays in Apps'
level 'U3L33 Student Lesson Introduction'
level 'U3 - Canvas - introCanvas'
level 'U3 - Canvas - 200dots'
level 'U3 - Canvas - transparentDots'
level 'U3 - Canvas - clickToAdd'
level 'U3 - Canvas - usingOffsetXY'
level 'U3 - Canvas - draw at click point'
level 'U3 - Canvas - changeToMouseMove'
level 'U3 - Canvas - shiftKey'
level 'U3 - Canvas - appendToArray'
level 'U3 - Canvas - delete'
level 'U3 - Canvas - redrawRandom'
level 'U3 - Canvas - redrawRandom2'
level 'U3 - Canvas - redrawOriginal'
level 'U3 - Canvas - movementFunction'
level 'U3 - Canvas - movementFunction fix Orig'
level 'U3 - Canvas - One Dot sprayPaint'
level 'U3 - Canvas - sprayPaint'
level 'U3 - Canvas - sketch'
level 'U3 - Canvas - freePlay'

stage 'Practice PT: Create'
level 'U3L34 Student Lesson Introduction'
level 'U3 - Practice Create Performance Task'

