var c = document.getElementById("A");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();

var c = document.getElementById("A");
var ctx2 = c.getContext("2d");
ctx2.moveTo(500, 0);
ctx2.lineTo(0, 500);
ctx2.stroke();