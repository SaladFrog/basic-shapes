var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var count = 100;
var dot = 0;

for(let i = 0; i < count; i++) {
var position = phyllotaxis([], dot, 4);
position[0] += canvas.width / 2;
position[1] += canvas.height / 2;

ctx.beginPath();
ctx.arc(position[0], position[1], 4, 0, 2 * Math.PI);
ctx.stroke();

dot++;
}

function phyllotaxis(out, dot, scale) {
//var angle = dot * 137.5; // angle in radius
var angle = dot * (137.5 * Math.PI / 180); // angle in degrees
var r = scale * Math.sqrt(dot);
out[0] = r * Math.cos(angle);
out[1] = r * Math.sin(angle);
return out;
}
