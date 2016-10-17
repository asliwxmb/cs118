##

- cta = "Remix the project"
    = view :highlight_item, item: {image: "slider-sketch", title: "Slider sketch", desc: "Use the sliders to draw cool patterns and designs. Challenge: Add another slider to change the thickness of the line.", cta: cta, url:
    'https://studio.code.org/projects/applab/JNbplBXMisx2aMefUkh39g/remix'}
    = view :highlight_item, item: {image: "landmark-flashcards", title: "Landmark flaschards", desc: "Want to learn more about a new subject or practice for a test? Use this app to create flashcards. Challenge: add more cards to the deck or create a whole new deck for your favorite subject.", cta: cta, url:
    'https://studio.code.org/projects/applab/sNZOTB_PiXAHt3Q5h_aRgQ/remix'}
    = view :highlight_item, item: {image: "milk-adventure", title: "Choose your own adventure", desc: "Choose carefully as you go through this short adventure. Challenge: continue the story by adding in more scenarios and choices. Or create a totally different story!", cta: cta, url: 
    'https://studio.code.org/projects/applab/nI9iumSHbTn5mHBXl-wxMw/remix'}
    = view :highlight_item, item: {image: "poke-pig", title: "Poke the pig", desc: "How many times you can poke the pig before time runs out? Challenge: Add a button and event to be able to play again and again, so you can improve your score.", cta: cta, url: 
    'https://studio.code.org/projects/applab/r469vc1FFSOxOlUruTFlUA/remix'}
#### title: "Pet poll", desc: "Vote for your favorite pet in this fun app. 
Challenge: Add more animals so you can vote for more favorites."

'https://studio.code.org/projects/applab/TjHfwdUd3ENlyImb7VX5Cg/remix'}
#### - title: "Pensive painter",
- desc: "Take a deep breath, relax, and paint whatever you desire. Challenge: Add a click event to clear the screen so you can start painting a new masterpiece."
- https://studio.code.org/projects/applab/IAK_Qyc23QrkAB61KGvn1g/remix

  
#### button	https://code.org/applab/docs/	https://code.org/applab/docs/button?embedded


### MarkDown CheatSheet
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code
### Multidimensional Arrays
<http://speakingjs.com/es5/ch18.html>


If you need multiple dimensions for elements, you must nest arrays. When you create such nested arrays, the innermost arrays can grow as needed. But if you want direct access to elements, you need to at least create the outer arrays. In the following example, I create a three-by-three matrix for Tic-tac-toe. The matrix is completely filled with data (as opposed to letting rows grow as needed):
Multidimensional Arrays
If you need multiple dimensions for elements, you must nest arrays. When you create such nested arrays, the innermost arrays can grow as needed. But if you want direct access to elements, you need to at least create the outer arrays. In the following example, I create a three-by-three matrix for Tic-tac-toe. The matrix is completely filled with data (as opposed to letting rows grow as needed):

```Javascript

// Create the Tic-tac-toe board
var rows = [];
for (var rowCount=0; rowCount < 3; rowCount++) {
    rows[rowCount] = [];
    for (var colCount=0; colCount < 3; colCount++) {
        rows[rowCount][colCount] = '.';
    }
}

// Set an X in the upper right corner
rows[0][2] = 'X';  // [row][column]

// Print the board
rows.forEach(function (row) {
    console.log(row.join(' '));
});

```

#Here is the output:

. .  X

. . .
. . .
