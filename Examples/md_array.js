// Plot a path along verticies in an array. Each vertex is also an array of two values.
var coordinates = [[10,10], [100,10], [100,100], [10,100], [10,10]];
penUp();
moveTo(coordinates[0][0],coordinates[0][1]);
penDown();
penWidth(3);
penColor("red");
for(var i=0;i<coordinates.length;i++)
{
  moveTo(coordinates[i][0], coordinates[i][1]);
}
