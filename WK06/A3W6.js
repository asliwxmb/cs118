/**
 * 
 * https://studio.code.org/projects/applab/0gszLyzfltyw_XuBlK982Q
 * a_sliwkowski/A3W6_House.js
 * Andrew Sliwkowski <a_sliwkowski@post.massbay.edu>
 * Attachments3:38 PM (0 minutes ago)
 * to d_kilburn, i_akdikmen 
 * Attached is code to build a house as part of a scene.  It is design so that all variables are local so you don't have to worry about colliding variables.
 * Simply follow the arg pattern to add this house to your design.
 *  1 Arg set's the X coordinate location of the House
 *  2 Arg set's the Y coordinate location of the House
 *  3 Arg set's the color of the Roof.
 *  4 Arg set's the color of the 1st Floor
 * 5 Arg set's the length of one side of the house.
 * var myHouse = new House(90, 400, "green", "blue", 100);
 * 
 *  The above example will create an House called myHouse at (x,y) 90,400 on the canvas with the a Green roof and blue first floor and where each side of the house is 100 length.
 *  The turtle will be returned to (x,y) location you used, so that you can move the turtle to draw the next part of scene.
 * With the House properties set call drawHouse
 * myHouse.drawHouse();
 * https://studio.code.org/projects/applab/0gszLyzfltyw_XuBlK982Q 
* a_sliwkowski/A3W6_House.js 
On Fri, Oct 14, 2016 at 10:55 AM, Andrew Sliwkowski <a_sliwkowski@post.massbay.edu> wrote:
team of 3 

 */
 
function House(homeX, homeY, pencolorRoof, pencolor1stFloor, length) {
    this.pencolorroof = pencolorRoof;
    this.pencolor1stfloor = pencolor1stFloor;
    this.length = length;
    this.lengthtmp = length;
    this.homex = homeX;
    this.homey = homeY;
    }
  
House.prototype = {


    drawHouse: function () {
 
        penUp();
        moveTo(this.homex, this.homey);
        penDown();
        this.drawSquare(this.length);
        penUp();
        moveTo(this.homex, this.homey);
        move(0, -(this.length));
        turnRight(30);
        penDown();
        this.drawTriangle(this.length);
        penUp();
        moveTo(this.homex, this.homey);
        turnTo(0);
        penDown();
    },

    drawSquare: function (length) {
        this.lengthtmp = length;
        penColor(this.pencolor1stfloor);
        for (var count = 0; count < 4; count++) {
            if (this.lengthtmp > 0) {

                moveForward(this.lengthtmp);
                turnRight(90);
                this.drawSquare(this.lengthtmp - 5);
            }
        }
    },
    drawTriangle: function (length) {
        this.lengthtmp = length;
        penColor(this.pencolorroof);
        for (var count = 0; count < 3; count++) {
            if (this.lengthtmp > 0) {
                moveForward(this.lengthtmp);
                turnRight(120);
                this.drawTriangle(this.lengthtmp - 5);
            }
        }
        return this;
    }
};

// 1 Arg set's the X coordinate location of the House.
// 2 Arg set's the Y coordinate location of the House.
// 3 Arg set's the color of the Roof.
// 4 Arg set's the color of the 1st Floor.
// 5 Arg set's the length of one side of the house.

var myHouse = new House(90, 400, "green", "blue", 100);

// With the House properties set call drawHouse
myHouse.drawHouse();
