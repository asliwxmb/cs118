
function House(homeX, homeY, pencolorRoof, pencolor1stFloor, length) {
    this.pencolorroof = pencolorRoof;
    this.pencolor1stfloor = pencolor1stFloor;
    // this.pencolor = pencolor;
    this.length = length;
    this.lengthtmp = length;
    this.homex = homeX;
    this.homey = homeY;
    //    this.ox = 40;
    //	  this.oy = 400;
    this.x = getX();
    this.y = getY();
    this.homes = [];
    this.dir = 0;
}
House.prototype = {


    drawHouse: function () {
        //  this.origin();
        //	  this.set();
        penUp();
        moveTo(this.homex, this.homey);
        penDown();
        this.drawSquare(this.length);
        penUp();
        moveTo(this.homex, this.homey);
        penDown();

        console.log(this.length);
        penUp();
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
        //    console.log (this.pencolor1stfloor);
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
    },

    origin: function () {
        this.ox = this.homex;
        this.oy = this.homey;
        moveTo(this.ox, this.oy);
        return this;
    },

    gotoHomeOrigin: function () {
        this.ox = this.x;
        this.oy = this.y;

        return this;
    },

    set: function () {
        this.homes.push({
            x: this.x,
            y: this.y,
            angle: this.dir
        });
        console.log(this.homes);
        return this;
    },

    angle: function (a) {
        this.dir = a - 90;
        return this;
    },

    home: function () {
        var last = this.homes.pop();
        console.log(last);
        console.log("lastx" + last.x);
        //	this.dir = last.angle;
        this.dir = 0;
        turnTo(this.dir);
        this.x = last.x;
        this.y = last.y;
        return this.goto(this.x, this.y);
    },

    penup: function () {
        this.pen = false;
        penUp();
        return this;
    },


    pendown: function () {
        this.pen = true;
        penDown();

        return this;
    },

    goto: function (x, y) {
        this.x = x;
        this.y = y;
        console.log("x,y" + x + y);
        penUp();
        moveTo(x, y);
        penDown();
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
