### Multidimensional Arrays
<http://speakingjs.com/es5/ch18.html>


If you need multiple dimensions for elements, you must nest arrays. When you create such nested arrays, the innermost arrays can grow as needed. But if you want direct access to elements, you need to at least create the outer arrays. In the following example, I create a three-by-three matrix for Tic-tac-toe. The matrix is completely filled with data (as opposed to letting rows grow as needed):
Multidimensional Arrays
If you need multiple dimensions for elements, you must nest arrays. When you create such nested arrays, the innermost arrays can grow as needed. But if you want direct access to elements, you need to at least create the outer arrays. In the following example, I create a three-by-three matrix for Tic-tac-toe. The matrix is completely filled with data (as opposed to letting rows grow as needed):
''''Javascript
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
''''
Here is the output:
Here is the output:
. . X
. . .
. . .
