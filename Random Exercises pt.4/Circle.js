var circle = document.getElementById("c");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "#FF0000";
ctx.fill();